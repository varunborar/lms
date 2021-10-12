const User = require("../models/user.model");
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Error handling functions

const HandleErrors = (err) => {

    const Errors = {
        "email": null,
        "password": null,
        "first-name": null,
        "last-name": null
    };

    // Duplicate error
    if (err.code === 11000) {
        Errors['email'] = "An account with that email already exists."
        return Errors;
    }

    // Valiation errors
    if (err.message.includes("user validation failed:")) {
        Object.values(err.errors).forEach(({ properties }) => {
            Errors[properties.path] = properties.message;
        })
    }

    // Not registered error
    if (err.message.includes("404:Email")) {
        Errors['email'] = "Email is not registered with an account.";
        return Errors;
    }

    // Wrong password error
    if (err.message.includes("400:Password")) {
        Errors['password'] = "Email and passwords do not match.";
    }

    return Errors;
};

// Creating JWT for an object
createToken = (payload) => {
    return jwt.sign(
        payload,
        process.env.SECRET, {
            'expiresIn': 24 * 60 * 60
        });
}

// Utility functions

// Authenticating requests from user
module.exports.authenticateToken = async(req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1] || authHeader;

    if (token == null)
        return res.status(401).json({ 'token': "token required" });

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ 'error': "token not valid" });
        }
        req.user = user;
        next();
    });
}

// Controllers

module.exports.register = async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const image = req.body['display-image'] || { 'data': null, 'contentType': null };

    const newUserRequest = {
        "first-name": firstName,
        "last-name": lastName,
        "email": email,
        "password": password,
        "display-image": image
    };

    try {
        const newUser = await User.create(newUserRequest);
        const successMessage = {
            "registered": true,
            "email": newUserRequest.email
        }
        res.status(200).json(successMessage);
    } catch (err) {
        const Errors = HandleErrors(err);
        res.status(400).json(Errors);
    }
};

module.exports.login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const loginRequest = {
            'user_id': user._id,
            'email': user.email,
            'first-name': user['first-name'],
            'last-name': user['last-name']
        };
        const token = createToken(loginRequest);
        res.cookie('auth', token, { 'httpOnly': true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({
            'auth': true,
            'accessToken': token,
            'user': user._id,
            'display-image': user['display-image']
        });
    } catch (err) {
        console.log(err);
        const Errors = HandleErrors(err);
        res.status(400).json(Errors);
    }

};
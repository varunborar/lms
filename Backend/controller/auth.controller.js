const User = require("../models/user.model");

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

    return Errors;
};

// Controllers

module.exports.register = async(req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const newUserRequest = {
        "first-name": firstName,
        "last-name": lastName,
        "email": email,
        "password": password
    };

    try {
        const newUser = await User.create(newUserRequest);
        res.status(200).json(newUser);
    } catch (err) {
        const Errors = HandleErrors(err);
        res.status(400).json(Errors);
    }
};

module.exports.login = async(req, res) => {
    const { email, password } = req.body;
    const loginRequest = {
        "email": email,
        "password": password
    };

    res.status(200).json(loginRequest);
};
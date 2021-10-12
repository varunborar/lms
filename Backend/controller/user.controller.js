const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

// Creating JWT for an object
createToken = (payload) => {
    return jwt.sign(
        payload,
        process.env.SECRET, {
            'expiresIn': 24 * 60 * 60
        });
}


module.exports.updateDetails = async(req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "first-name": req.body['first-name'],
            "last-name": req.body['last-name'],
            "password": req.body['password']
        }
    }, { new: true }).then((result) => {
        const approvedRequest = {
            'user_id': result._id,
            'email': result.email,
            'first-name': result['first-name'],
            'last-name': result['last-name']
        };
        const token = createToken(approvedRequest);
        res.status(200).json({
            'auth': true,
            'accessToken': token,
            'user': result._id,
            'display-image': result['display-image']
        });
    }).catch(err => {
        console.log(err);
        res.status(400).json({ 'error': err });
    })
}
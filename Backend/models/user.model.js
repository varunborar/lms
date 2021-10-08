const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    "first-name": {
        "type": String,
        "required": [true, "First Name is required"]
    },
    "last-name": {
        "type": String,
        "required": [true, "Last Name is required"]
    },
    "email": {
        "type": String,
        "required": [true, "Email is required"],
        "unique": true,
        "lowercase": true,
        "validate": [isEmail, "Email invalid"]
    },
    "password": {
        "type": String,
        "required": [true, "Password is required"],
        "minlength": [8, "Minimum password length should be 8 characters"]
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
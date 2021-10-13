const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

require('dotenv').config();

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
    },
    "display-image": {
        "data": String,
        "contentType": String
    }
});

// Static method to login

UserSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('400:Password');
    }
    throw Error('404:Email');
}

// Hashing the password

UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
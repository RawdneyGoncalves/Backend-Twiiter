
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('User', UserSchema);
module.exports = User;



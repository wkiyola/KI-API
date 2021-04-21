const mongoose = require('mongoose');
//schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String
});

module.exports = mongoose.model('Users', UserSchema);
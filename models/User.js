const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    roles: [{
        type: String,
        default: "employee"
    }],
    active: {
        type: Boolean,
        default: true
    },
}) 

module.exports = mongoose.model('User', userSchema)
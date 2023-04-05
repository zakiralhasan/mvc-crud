const mongoose = require('mongoose');//used for import mongoose

//create user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: String
})

module.exports = mongoose.model('user', userSchema)
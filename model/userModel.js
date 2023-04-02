const mongoose = require('mongoose');//used for import mongoose

//create user schema
const userSchema = mongoose.Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model('user', userSchema);
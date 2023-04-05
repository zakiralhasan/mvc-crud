const mongoose = require('mongoose');//used for import mongoose

//create user contact schema
const contactSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: Number,
})

module.exports = mongoose.model('contact', contactSchema);
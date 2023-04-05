const express = require('express');//used for import express
const app = express(); //used for creating app
const mongoose = require("mongoose");//used for import mongoose
mongoose.connect('mongodb://localhost:27017/ecommerce');//used for established connection with mongoDB

const port = process.env.PORT || 5000;

const userRoute = require('./routes/userRoute');//used for import user route
const contactRoute = require('./routes/contactRoute'); //used for import contact route


app.use(express.json());

app.use('/user', userRoute);//used for user route to register, login, get user list etc.
app.use('/contact', contactRoute) //used for user contact route to do CRUD operation on user collections




// below codes are for server.....
app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(port, () => {
    console.log('server is running on port:', port);
})
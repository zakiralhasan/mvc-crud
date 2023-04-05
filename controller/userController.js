const User = require('../model/userModel');//used for import user model
const bcrypt = require('bcrypt');

//used for register new user 
const registerUserController = async (req, res, next) => {
    try {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if (err) {
                res.send(err)
            }
            let data = new User({
                email: req.body.email,
                password: hash
            });
            const result = await data.save();
            res.send(result);
        })

    } catch (error) {
        console.log(error.message)
    }
}

//used for login user 
const loginUserController = async (req, res, next) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let query = await User.findOne({ email });

        if (query) {
            bcrypt.compare(password, query.password, (err, result) => {
                if (err) {
                    res.send({ message: 'Error occured!' })
                }
                if (result) {
                    res.send({ message: 'Login successful!' })
                } else {
                    res.send({ message: 'Login faild. Password dosent match!' })
                }
            })
        } else {
            res.send({ message: 'User not found!' })
        }
    } catch (error) {
        console.log(error.message)
    }
}

//used for getting user collection
const getUserController = async (req, res, next) => {
    try {
        const userData = await User.find({})
        res.send(userData)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    registerUserController,
    loginUserController,
    getUserController
}
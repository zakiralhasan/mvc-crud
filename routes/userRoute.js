const express = require('express');//used for import express
const userRouter = express.Router();//used for creating user route
const userController = require('../controller/userController');//import user controller
const authenticate = require('../middleware/authenticate');

userRouter.post('/register', userController.registerUserController);//used for register new user
userRouter.post('/login', userController.loginUserController);//used for login new user
userRouter.get('/', authenticate, userController.getUserController);//used for get user list

module.exports = userRouter;
const express = require('express');//used for import express
const userRouter = express.Router();//used for creating user route
const userController = require('../controller/userController');//import user controller

userRouter.post("/", userController.postUserController);//used for POST operation
userRouter.get('/', userController.getUserController);//used for GET operation
userRouter.put('/:name', userController.putUserController);//used for PUT operation
userRouter.delete('/:name', userController.deleteUserController);//used for DELETE operation


module.exports = userRouter;
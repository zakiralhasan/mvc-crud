const express = require('express');//used for import express
const contactRouter = express.Router();//used for creating user contact route
const contactController = require('../controller/contactController');//import user contact controller

contactRouter.post("/", contactController.postContactController);//used for POST operation
contactRouter.get('/', contactController.getContactController);//used for GET operation
contactRouter.put('/:name', contactController.putContactController);//used for PUT operation
contactRouter.delete('/:name', contactController.deleteContactController);//used for DELETE operation


module.exports = contactRouter;
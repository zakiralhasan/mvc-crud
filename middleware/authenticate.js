const jwt = require('jsonwebtoken');//used for import JWT
require('dotenv').config();//used for reading .env file

//this is a middleware function, which used for verifing valid user through jwt token
const authentication = (req, res, next) => {
    try {
        //used for getting user's jwt token, which send through API header
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_TOKEN);//used for verifing user's jwt token
        next();

    } catch (error) {
        res.send({ error, message: 'authentication faild!' })
    }
}

module.exports = authentication;
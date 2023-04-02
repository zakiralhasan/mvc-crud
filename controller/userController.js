const User = require('../model/userModel');//used for import user model

//used for creating new user
const postUserController = async (req, res, next) => {
    // const result = await new User(req.body).save();
    let data = new User(req.body);
    const result = await data.save();
    res.send(result);
}

//used for getting user collection
const getUserController = async (req, res, next) => {
    const userData = await User.find({})
    res.send(userData)
}

//used for getting single user and update his data
const putUserController = async (req, res, nex) => {
    const findUserName = req.params.name;
    const changedUserName = req.body.name;

    const query = await User.findOne({
        name: findUserName
    })

    const changedUserData = await User.findOneAndUpdate(query, {
        $set: { name: changedUserName }
    })

    res.send('mesg: data chaged successfully!')
}

//used for getting single user and delete his data
const deleteUserController = async (req, res, nex) => {
    const findUserName = req.params.name;

    const query = await User.findOne({
        name: findUserName
    })

    const deletedUserData = await User.deleteOne(query)

    res.send('mesg: data deleted successfully!')
}

module.exports = {
    getUserController,
    postUserController,
    putUserController,
    deleteUserController
}
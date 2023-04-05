const Contact = require('../model/contactModel');//used for import user contact model

//used for creating new user contact
const postContactController = async (req, res, next) => {
    try {
        // const result = await new User(req.body).save();
        let data = new Contact(req.body);
        const result = await data.save();
        res.send(result);
    } catch (error) {
        console.log(error.message)
    }
}

//used for getting user contact collection
const getContactController = async (req, res, next) => {
    try {
        const userData = await Contact.find({})
        res.send(userData)
    } catch (error) {
        console.log(error.message)
    }
}

//used for getting single user contact and update its data
const putContactController = async (req, res, nex) => {
    try {
        const changedUserName = req.body.name;

        const query = { name: req.params.name }

        await Contact.findOneAndUpdate(query, {
            $set: { name: changedUserName }
        })
        res.send('mesg: data chaged successfully!')

    } catch (error) {
        console.log(error.message)
    }

}

//used for getting single user contact and delete its data
const deleteContactController = async (req, res, nex) => {
    try {
        const findUserName = req.params.name;

        const query = await Contact.findOne({
            name: findUserName
        })

        await Contact.deleteOne(query)

        res.send('mesg: data deleted successfully!')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    postContactController,
    getContactController,
    putContactController,
    deleteContactController
}
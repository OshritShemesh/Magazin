const modle = require('../models/user')
const User = modle.User


const addUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save().then((data) => {
        res.json(data)
    })
    console.log(newUser);
    // res.json(newUser)
}

const getHistory = (req, res) => {
    console.log(req.params.id);
    User.findById(req.params.id).populate({ path: 'pictures', select: 'id thumbnailUrl url title' }).then(pic => {
        res.json({ pic: pic })
        console.log(pic.pictures);
    }
    )
}
module.exports = { addUser, getHistory }
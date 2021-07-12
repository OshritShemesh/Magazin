const modle2 = require('../models/user')
const User = modle2.User


const login = (req, res) => {
    // console.log(req.body);
    User.findOne({ email: req.body.email, password: req.body.password }).then((user) => {
        if (user != null)
            res.json({ user: user })
        else {
            res.send(false)
        }
    })
}
module.exports = { login }
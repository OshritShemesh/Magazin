const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    pictures:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Picture'
        }
    ]

})

const User = mongoose.model('User', UserSchema)
module.exports = {
    User: User
}
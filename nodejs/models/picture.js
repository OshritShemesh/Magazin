const mongoose = require('mongoose')

const PictureSchema = mongoose.Schema({
    albumId: {
        type: Number
    },
    id: {
        type: Number
    },
    thumbnailUrl: {
        type: String,
        required: true

    },
    url: {
        type: String,
    },
    title: {
        type: String
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }


})

const Picture = mongoose.model('Picture', PictureSchema)
module.exports = {
    Picture: Picture
}
const request = require('request')
const modle = require('../models/picture')
const Picture = modle.Picture
const modle2 = require('../models/user')
const User = modle2.User
var multer = require('multer')
// var urljoin = require('url-join');
// const path= require('path')

const requestApi = () => {
    return new Promise((resolve, reject) => {
        let options = {
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/photos`
        }
        request(options, function (err, res, body) {
            if (err) {
                reject(err)
            }
            else {
                resolve(body)
                // console.log(JSON.parse(body));
            }

        });
    })
}

const addPic = (req, res) => {
    const newPic = new Picture(req.body.choosenPic)
    newPic.save().then(pic => {
        console.log(pic);
        User.findByIdAndUpdate(pic.userId, { $push: { 'pictures': pic._id } }).then(() => {
            res.json({ pic: pic })
        })
    })

}
function addNewPic(newPath, id, name) {
    console.log("id", id);

    const newPic = new Picture({ thumbnailUrl: newPath, userId: id, title: name })
    newPic.save().then(pic => {
        console.log(pic);
        User.findByIdAndUpdate(id, { $push: { 'pictures': pic._id } }).then(() => {
        })

    })
}
// const newPath = "";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, 'C:\\Users\\USER\\Desktop\\לימודי אטרא\\project\\reactproject\\public')
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname)
        addNewPic('C:\\Users\\USER\\Desktop\\לימודי אטרא\\project\\reactproject\\public' + file.originalname, req.params.id, file.originalname)
    }
})

var upload = multer({ storage: storage }).single('file')

const uploadImage = (req, res) => {
    console.log("uploadImage");

    // console.log(req);
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)

    })

};


// const uploadImage = (req, res) => {
//     console.log("uploadImage");
//     console.log(req.body);

//     // const newPic = new Picture({ url: req.body.imageUrl })
//     // newPic.save().then(pic => {
//     //     console.log(pic);
//     //     User.findByIdAndUpdate(req.params.id, { $push: { 'pictures': pic._id } }).then(() => {
//     //         res.json({ pic: pic })
//     //     })
//     // })
// }

const delPictureFromHistory = (req, res) => {
    console.log(req.body.userId);
    Picture.findOneAndDelete({ _id: req.params.id }).then(pic => {
        User.update({ _id: req.body.userId }, { $pull: { 'pictures': pic._id } }).then(user => {
            User.findById(req.body.userId).populate({ path: 'pictures', select: 'id thumbnailUrl  title' }).then(pic => {
                res.json({ pic: pic })
            })
        }
        )
    })
}

const getPictures = (req, res) => {
    try {
        requestApi().then((body) => {
            const data = JSON.parse(body)
            res.json(data);
        })
    }
    catch{
        console.log("error");
    }
}

module.exports = { getPictures, addPic, delPictureFromHistory, uploadImage }
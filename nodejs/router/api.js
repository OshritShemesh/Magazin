const router = require('express').Router()
const login = require('../controllers/login')
const user = require('../controllers/user')
const picture = require('../controllers/picture')

router.post('/login', login.login)
router.post('/addUser', user.addUser)
router.get('/getPictures', picture.getPictures)
router.post('/addPic', picture.addPic)
router.get('/getHistory/:id', user.getHistory)
router.delete('/delPictureFromHistory/:id', picture.delPictureFromHistory)
router.post('/upload/:id', picture.uploadImage)
module.exports = router
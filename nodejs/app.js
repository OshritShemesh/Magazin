const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var url = require('url');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()
const mongoose = require('mongoose')
const route = require('./router/api')
var multer = require('multer')
var cors = require('cors');
app.use(cors())
app.use(bodyParser.json())
app.use('/', route)


const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.CONECT_DB, connectionParams).then(() => {
    console.log("connect");

}).catch((err) => {
    console.log(err);

})


app.listen(8080, () => {
    console.log("listen");

});
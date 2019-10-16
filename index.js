const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config({ path: __dirname + '/.env' })
const Users = require('./models/users.js')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const routes = require('./api/routes') //importing route
routes(app)
app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
})
app.listen(3000, () => console.log('Server đã khởi động trên port 3000'))
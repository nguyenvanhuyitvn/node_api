const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Users = require('./models/users.js')
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => res.send('Welcome to Express'))

app.post('/add', (req, res) => {
    const user = req.body.u
    const pass = req.body.p
    Users.create({
            username: user,
            password: pass
        })
        .then(() => res.json({ 'message': 'Success' }))
        .catch(err => res.json({ 'message': 'Failure' }))
})
app.post('/read', (req, res) => {
    Users.findAll()
        .then(users => res.json({ 'message': 'Fetched All', 'data': users }))
        .catch(err => res.json({ 'message': 'Cannot to fetched users' }))
})
app.post('/update', (req, res) => {
    const { id, usr, pwd } = req.body
    Users.update({
            username: usr,
            password: pwd
        }, {
            where: { id: id }
        })
        .then(row => res.json({ 'message': 'Successfull', 'row': row[0] }))
        .catch(err => res.json({ 'message': 'Cannot to update users' }))
})
app.post('/delete', (req, res) => {
    const { id } = req.body
    Users.destroy({
            where: { id: id }
        })
        .then(row => res.json({ 'message': 'Deleted', 'row': row }))
        .catch(err => res.json({ 'message': 'Cannot to delete users' }))
})
app.listen(3000, () => console.log('Server đã khởi động trên port 3000'))
'use strict'
const db = require('../db').db;
const sequelize = require('sequelize')
const Users = require('./../../models/users')
module.exports = {
    get: (req, res) => {
        Users.findAll()
            .then(users => res.status(200).json({ 'message': 'Fetched users', 'data': users }))
            .catch(err => res.json({ 'message': 'Can not fetched data' }))
    },
    // get: (req, res, next) => {
    //     db.query('select * from user')
    //         .then(users => res.status(200).json({ 'message': 'Fetched users', 'data': users }))
    //         .catch(function(err) {
    //             return next(err);
    //         });
    // },

    store: (req, res) => {
        const user = req.body.username
        const pass = req.body.password
        Users.create({
                username: user,
                password: pass
            })
            .then(() => res.json({ 'message': 'Success' }))
            .catch(err => res.json({ 'message': 'Failure' }))
    },
    detail: (req, res) => {
        const id = req.body.id
        Users.findOne({
                where: { id: id }
            })
            .then(user => res.json({ 'message': 'Fetched user', 'data': user }))
            .catch(err => res.json({ 'message': ' Cannot fetch user ' }))
    },
    update: (req, res) => {
        const { id, username, password } = req.body
        Users.update({
                username: username,
                password: password
            }, {
                where: { id: id }
            })
            .then(row => res.json({ 'message': 'Successfull', 'row': row[0] }))
            .catch(err => res.json({ 'message': 'Cannot to update users' }))
    },
    destroy: (req, res) => {
        const id = req.body.id
        Users.destroy({
                where: { id: id }
            })
            .then(row => res.json({ 'message': 'Deleted', 'row': row }))
            .catch(err => res.json({ 'message': 'Cannot to delete users' }))
    }
}
const sequelize = require('sequelize')
const db = require('../api/db.js').db;
const Op = require('../api/db.js').Op;

// class Users extends Model {}
// Users.init({
//         username: {
//             type: sequelize.STRING
//         },
//         password: {
//             type: sequelize.STRING
//         }
//     }, { sequelize, modelName: 'user' })
const Users = db.define('user', {
    username: {
        type: sequelize.STRING
    },
    password: {
        type: sequelize.STRING
    }
})
module.exports = Users;
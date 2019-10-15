const sequelize = require('sequelize')
const db = require('../db.js').db;
const Op = require('../db.js').Op;
const Users = db.define('user', {
        username: {
            type: sequelize.STRING
        },
        password: {
            type: sequelize.STRING
        }
    }
    // , {
    //     timestamps: false
    // }

)
module.exports = Users;
const sequelize = require('sequelize')
const db = require('../api/db.js').db;
const Op = require('../api/db.js').Op;

const Post = db.define({
    title: {
        type: sequelize.STRING
    }
})
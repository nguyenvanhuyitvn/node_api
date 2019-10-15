'use strict';
const sequelize = require('sequelize')
const db = new sequelize({
    database: process.env.DB_NAME || "postgres",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "admin",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    define: {
        freezeTableName: true // định nghĩa bảng table có tên giống tên định nghĩa. Nếu không có thì trong database sẽ tự động thêm "s" vào table
    }
});
const Op = sequelize.Op;
db.authenticate()
    .then(() => console.log('Kết nối thành công'))
    .catch(err => console.log(err.message))

// db.sync()
//     .then(() => console.log('tạo model thành công'))
//     .catch(err => console.log(err.message))

// Thêm dữ liệu vào Database

// tạo được 1 record một lúc
// Users.create({
//         username: "Nguyễn Văn Huy",
//         password: "123456"
//     }).then(() => console.log('Thêm data thành công'))
//     .catch(err => console.log(err.message))

// tạo được nhiều record một lúc
// Users.bulkCreate([
//         { username: 'Nguyễn Anh Lương', password: '123456' },
//         { username: 'Nguyễn Văn Luận', password: '123456' },
//         { username: 'Nguyễn Văn Hải', password: '123456' },
//     ]).then(() => console.log('Thêm data thành công'))
//     .catch(err => console.log(err.message))

// Cập nhật dữ liệu

// Users.update({
//         username: "Nguyễn Văn Huy",
//         password: "admin"
//     }, {
//         where: { id: 1 }
//     })
//     .then(row => console.log(row))
//     .catch(err => console.log(err.message))


// Xóa record
// Users.destroy({
//         where: { id: 7 }
//     })
//     .then(row => console.log(row))
//     .catch(err => console.log(err.message))

// Tìm kiếm dữ liệu

// Users.findOne({
//         where: { id: 5 }
//     }).then(user => console.log(user))
//     .catch(err => console.log(err.message))

// Users.findAll({
//         where: { id: [5, 6] },
//         raw: true
//     })
//     .then(user => console.log(user))
//     .catch(err => console.log(err.message))
module.exports = {
    db,
    Op
}
require('dotenv').config()
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE
})
db.connect(err => {
    if (err) throw err
    console.log('Connected to MySQL')
})
module.exports = db

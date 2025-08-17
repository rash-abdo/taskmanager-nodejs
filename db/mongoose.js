const mongoose = require("mongoose")
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI
const DB_NAME = process.env.DB_NAME

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            dbName: DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
            serverSelectionTimeoutMS: 10000, // timeout after 10s if can't connect
        })
        console.log(`Mongo connected: ${conn.connection.host}/${conn.connection.name}`)
    } catch (err) {
        console.error('Mongo connection error:',err.message)
        process.exit(1)
    }

    //handelling disconnections
    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected')
    })
    mongoose.connection.on('error', err => {
        console.error('Mongo error:',err)
    })
}

module.exports = connectDB
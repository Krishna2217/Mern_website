require('dotenv').config()
const mongoose = require('mongoose')

// const URI = 'mongodb://127.0.0.1:27017/mern_admin'
const URI = process.env.MONGODB_URI

const connectdb = async () =>{
    try {
        mongoose.connect(URI);
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed");
        process.exit(0);
    }
}

module.exports = connectdb;
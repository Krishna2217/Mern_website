const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true,
    },
    email: {
        type: String,
        require:true,
    },
    phone: {
        type: String,
        require:true,
    },
    password: {
        type: String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
})

const User = new mongoose.model('User',UserSchema)

module.exports = User
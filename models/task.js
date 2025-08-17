const mongoose = require("mongoose")

const Task = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    checked:{
        type:Boolean,
        default:false
    },
    date:{
        type:date,
        required:true
    }
})

module.exports = mongoose.model('Task',Task)
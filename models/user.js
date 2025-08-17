const mongoose = require('mongoose')

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength:3,
    maxlength:50
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  blocked: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('User',User)
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  content: String,
  author: String
}, {
  timestamps: true,
  toObject: {
    getters: true
  }
})

const Message = mongoose.model('Message', schema)

module.exports = Message

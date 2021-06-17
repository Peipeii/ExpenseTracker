const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  categoryIcon: {
    type: String,
    defult: 'fa-pen'
  },
  date: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
  // ,
  // totalAmount: {
  //   type: Number,
  //   required: true
  // }
})

module.exports = mongoose.model('Record', recordSchema)
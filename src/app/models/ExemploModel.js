const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }
})

Schema.plugin(mongoosePaginate)

module.exports = mongoose.model('ExemploModel', Schema)

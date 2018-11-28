const Joi = require('joi')

module.exports = {
  body: {
    content: Joi.string().required()
  }
}

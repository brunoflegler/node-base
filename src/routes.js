const express = require('express')
const Router = express.Router()

const controllers = require('./app/controllers')

Router.get('/exemplos', controllers.ExemploController.index)
Router.get('/exemplos/:id', controllers.ExemploController.show)
Router.post('/exemplos', controllers.ExemploController.store)
Router.put('/exemplos/:id', controllers.ExemploController.update)
Router.delete('/exemplos/:id', controllers.ExemploController.destroy)

module.exports = Router

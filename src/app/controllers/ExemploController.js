const ExemploModel = require('../models/ExemploModel')

class ExemploController {
  async index (req, res) {
    const { ...query } = req.query
    const filters = {}

    const exemplos = await ExemploModel.paginate(filters, {
      page: query.page || 1,
      limit: 20
    })
    res.json(exemplos)
  }

  async show (req, res) {
    const exemplo = await ExemploModel.findById(req.params.id)
    return res.json(exemplo)
  }

  async store (req, res) {
    const { ...data } = req.body
    const exemplo = await ExemploModel.create(data)
    return res.json(exemplo)
  }

  async update (req, res) {
    const { ...data } = req.body

    const exemplo = await ExemploModel.findByIdAndUpdate(req.params.id, data, {
      new: true
    })

    res.json(exemplo)
  }

  async destroy (req, res) {
    await ExemploModel.findByIdAndRemove(req.params.id)

    return res.send()
  }
}

module.exports = new ExemploController()

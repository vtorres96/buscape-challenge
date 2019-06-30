const Product = require('../models/Product')

module.exports = {
    async index(req, res) {
        const products = await Product.find().sort('createdAt')

        return res.json(products)
    },

    async create(req, res) {
        const product = await Product.create(req.body)
        
        req.io.emit('product', product)

        return res.json(product)
    }
}
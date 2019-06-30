const express = require('express')
const multer = require('multer')
const ProductController = require('./controllers/ProductController')

const routes = new express.Router()
const upload = multer({ dest: './' })

routes.get('/products', ProductController.index);
routes.post('/products', upload.single('optmize'), ProductController.create);

module.exports = routes
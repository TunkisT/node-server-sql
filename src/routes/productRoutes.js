const express = require('express');
const {
  getProducts,
  postProducts,
} = require('../controllers/productControllers');

const productRoutes = express.Router();

productRoutes.get('/products', getProducts);
productRoutes.post('/products', postProducts);

module.exports = productRoutes;

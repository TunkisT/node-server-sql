const express = require('express');
const {
  getProducts,
  postProducts,
  deleteProduct,
} = require('../controllers/productControllers');

const productRoutes = express.Router();

productRoutes.get('/products', getProducts);
productRoutes.post('/products', postProducts);
productRoutes.delete('/products/:id', deleteProduct);

module.exports = productRoutes;

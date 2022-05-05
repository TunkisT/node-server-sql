const express = require('express');
const {
  getProducts,
  postProducts,
  deleteProduct,
  getTotalProducts,
} = require('../controllers/productControllers');

const productRoutes = express.Router();

productRoutes.get('/products', getProducts);
productRoutes.get('/totalproducts', getTotalProducts);
productRoutes.post('/products', postProducts);
productRoutes.delete('/products/:id', deleteProduct);

module.exports = productRoutes;

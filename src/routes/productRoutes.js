const express = require('express');
const { getProducts } = require('../controllers/productControllers');

const productRoutes = express.Router();

productRoutes.get('/products', getProducts);

module.exports = productRoutes;

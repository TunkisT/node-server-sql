const { getProductsFromDb } = require('../models/productModels');

async function getProducts(req, res) {
  const accObj = await getProductsFromDb();
  !accObj
    ? res.status(500).json('Something get wrong')
    : res.status(200).json(accObj);
}

async function postProducts(req, res) {
  const data = req.body;
  const accObj = await getProductsFromDb(data);
  !accObj
    ? res.status(500).json('Something get wrong')
    : res.status(200).json(accObj);
}

module.exports = {
  getProducts,
  postProducts,
};

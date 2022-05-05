const { getProductsFromDb } = require('../models/productModels');

async function getProducts(req, res) {
  const accObj = await getProductsFromDb();
  if (accObj === false) {
    res.status(500);
    return;
  }
  res.json(accObj);
}

module.exports = {
  getProducts,
};

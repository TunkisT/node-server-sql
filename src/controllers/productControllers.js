const {
  getProductsFromDb,
  postProductsToDb,
  deleteProductFromDb,
  getTotalProductsFromDb,
} = require('../models/productModels');

async function getProducts(req, res) {
  const accObj = await getProductsFromDb();
  !accObj
    ? res.status(500).json('Something get wrong')
    : res.status(200).json(accObj);
}

async function postProducts(req, res) {
  const data = req.body;
  const accObj = await postProductsToDb(data);
  !accObj
    ? res.status(500).json('Something get wrong')
    : res.status(200).json(accObj);
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  const accObj = await deleteProductFromDb(id);
  !accObj
    ? res.status(500).json('Something get wrong')
    : res.status(200).json(accObj);
}

async function getTotalProducts(req, res) {
  const accObj = await getTotalProductsFromDb();
  !accObj
    ? res.status(500).json('Something get wrong')
    : res.status(200).json(accObj);
}

module.exports = {
  getProducts,
  postProducts,
  deleteProduct,
  getTotalProducts,
};

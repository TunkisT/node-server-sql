const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function getProductsFromDb() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM products`;
    const [result] = await connection.query(sql);
    await connection.close();
    return result;
  } catch (error) {
    return false;
  }
}

async function postProductsToDb(data) {
  try {
    console.log('data ===', data);
    const connection = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO products (image_url, title, description, price) VALUES (?, ?, ?, ?)`;
    const { image_url, title, description, price } = data;
    const [result] = await connection.execute(sql, [
      image_url,
      title,
      description,
      price,
    ]);
    await connection.close();
    return result;
  } catch (error) {
    return false;
  }
}

async function deleteProductFromDb(id) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `DELETE FROM products WHERE id = ? LIMIT 1`;
    const [result] = await connection.execute(sql, [id]);
    await connection.close();
    return result;
  } catch (error) {
    return false;
  }
}

async function getTotalProductsFromDb() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT COUNT(*) FROM products`;
    const [result] = await connection.query(sql);
    await connection.close();
    return result;
  } catch (error) {
    return false;
  }
}

module.exports = {
  getProductsFromDb,
  postProductsToDb,
  deleteProductFromDb,
  getTotalProductsFromDb,
};

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

module.exports = {
  getProductsFromDb,
  postProductsToDb,
};

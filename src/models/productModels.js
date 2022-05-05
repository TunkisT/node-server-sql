const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');
console.log('dbConfig ===', dbConfig);

async function getProductsFromDb() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to DB');
    const sql = `SELECT * FROM products`;
    const [result] = await connection.query(sql);
    await connection.close();
    return result;
  } catch (error) {
    console.log('Error connecting to DB');
    return false;
  }
}

module.exports = {
  getProductsFromDb,
};

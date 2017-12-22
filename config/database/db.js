const mysql = require('mysql');
const dotenv = require('dotenv').config({ path: '.env' });

const db = {
  getDb(env = 'cleardb') {
    
    if (env == 'cleardb') {
      const connection = mysql.createPool({
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,

      });
      return connection
      
    } else {
      const connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'centrev2',
      })
      return connection;
    }
  },

  schemaHeroku() {
    const connection = {
      host: process.env.HOST,
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    }
    return connection
  },

  schema() {
    const connection = {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'centrev2',
    } 
    return connection;
  }
}

module.exports = db;
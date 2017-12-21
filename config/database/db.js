const mysql = require('mysql');
const dotenv = require('dotenv').config({ path: '.env' });

const db = {
  getDb(env) {
    
    if (env == 'jaws') {
      const connection = mysql.createConnection(process.env.JAWSDB_URL);
      return connection
      
    } else {
      const connection = mysql.createPool({
        connectionLimit: 50,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'centrev2'
      })
      return connection;
    }
  },

  schema() {
    const connection = {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'centrev2'
    } 
    return connection;
  }
}

module.exports = db;
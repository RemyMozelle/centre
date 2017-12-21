const mysql = require('mysql');
const dotenv = require('dotenv').config({ path: '.env' })

const db = {
  getDb(){
    /* const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'centrev2'
    })
    
    return connection */
    const connection = mysql.createConnection(process.env.JAWSDB_URL)
    return connection
  }
}

module.exports = db;
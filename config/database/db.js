const mysql = require('mysql');

const db = {
  getDb(){
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'centrev2'
    })
    
    return connection
  }
}

module.exports = db;
const mysql = require('mysql');

const db = {
  getDb(){
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'centre'
    })
    
    return connection
  }
}

module.exports = db;
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : "",
    database: 'alumni',
    port: "3306"
  });

const connectionps = connection.promise();
module.exports = connectionps;
var mysql = require('mysql');
var pw = process.env.MYSQL_PW;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: pw,
    port: process.env.PORT | 3000,
    database: eatDaBurger_db
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to MySQL Database');
    console.log('---------------------------');
});
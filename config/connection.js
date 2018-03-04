var mysql = require('mysql');
var pw = process.env.MYSQL_PW;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: pw,
    database: eatDaBurger_db
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + error.stack);
        return;
    }
    console.log('\n-------------------------------------');
    console.log('Connected to MySQL Database as ID ' + connection.threadId);
    console.log('-------------------------------------\n');
});

module.exports = connection;
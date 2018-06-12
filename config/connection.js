require('dotenv').config();
var mysql = require('mysql');
var pw = process.env.MYSQL_PW;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: pw,
        database: 'eatDaBurger_db'
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
       // if (err) throw err;
        return;
    }
    console.log('\n-------------------------------------');
    console.log('Connected to MySQL Database as ID ' + connection.threadId);
    console.log('-------------------------------------\n');
});

// connection.end();

module.exports = connection;
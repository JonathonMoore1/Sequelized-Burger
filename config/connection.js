require('dotenv').config();
var mysql = require('mysql');
var pw = process.env.MYSQL_PW;

if (process.env.JAWS_URL) {
    connection = mysql.createConnection(process.env.JAWS_URL)
} 
else {
    connection = mysql.createConnection({
        host: 'yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: '	n30pbmgv0b3urj0w',
        password: pw,
        database: 'sote809xii2c09qd',
        port: 3306
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

module.exports = connection;
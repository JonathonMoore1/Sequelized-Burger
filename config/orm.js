var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        var queryString = 'SELECT * FROM ?? WHERE ?? = ?';
        connection.query(
            queryString, [tableInput, colToSearch, valOfCol], 
            function(err, res) {
                if (err) throw err;
                console.log(res);
            }
        );
    },
    insertOne: function(tableInput, colToSearch, insertVal) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(
            queryString, 
            [tableInput, colToSearch, insertVal], 
            function(err, res) {
                if (err) throw err;
                console.log(res);
            }
        );
    },
    updateOne: function(tableInput, colToUpdate, 
        updateVal, colToSearch, valofCol) {
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(
            queryString, 
            [tableInput, colToUpdate, updateVal, 
                colToSearch, valofCol], 
            function(err, res) {
                if (err) throw err;
                console.log(res);
            }
        );
    }
}

module.exports = orm;
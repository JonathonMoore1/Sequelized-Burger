var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(
            queryString, [tableInput], 
            function(err, res) {
                if (err) throw err;
                cb(res);
            }
        );
    },
    insertOne: function(tableInput, colToSearch, insertVal, cb) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(
            queryString, 
            [tableInput, colToSearch, insertVal], 
            function(err, res) {
                if (err) throw err;
                cb(res);
            }
        );
    },
    updateOne: function(tableInput, colToUpdate, 
        updateVal, colToSearch, valofCol, cb) {
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(
            queryString, 
            [tableInput, colToUpdate, updateVal, 
                colToSearch, valofCol], 
            function(err, res) {
                if (err) throw err;
                cb(res);
            }
        );
    }
}

module.exports = orm;
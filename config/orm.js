require('./connection.js');

var orm = {
    selectAll: function(colToSearch, val) {
        var queryString = 'SELECT * FROM burgers WHERE ?? = ?';
        connection.query(
            queryString, [colToSearch, val], 
            function(err, res) {
                if (err) throw err;
                console.log(res);
            }
        );
    },
    insertOne: function(val) {
        var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
        connection.query(
            queryString, [val], 
            function(err, res) {
                if (err) throw err;
                console.log(res);
            }
        );
    },
    updateOne: function(val) {
        var queryString = 'UPDATE burgers SET devoured = 1 WHERE burger_name = ?';
        connection.query(
            queryString, [val], 
            function(err, res) {
                if (err) throw err;
                console.log(res);
            }
        );
    }
}

module.exports = orm;
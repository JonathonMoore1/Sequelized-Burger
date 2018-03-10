var connection = require('./connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

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
        var queryString = 'INSERT INTO ' + tableInput;
        queryString += ' (';
        queryString += colToSearch.toString();
        queryString += ') VALUES (';
        queryString += printQuestionMarks(insertVal.length);
        queryString += ')';

        connection.query(
            queryString, insertVal, 
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
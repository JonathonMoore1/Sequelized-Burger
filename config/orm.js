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

// var orm = require("../config/orm.js");

// var cat = {
//   all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("cats", condition, function(res) {
//       cb(res);
//     });
//   }
// };
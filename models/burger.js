// Import ORM from orm.js
var orm = require('../config/orm.js');

// ORMs
var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(val, cb) {
        orm.insertOne('burgers', 'burger_name', val, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne('burgers', 'devoured', 1, condition, function(res) {
            cb(res);
        });
    },
    resetAll: function(table, cb) {
        orm.resetAll('burgers', function(res) {
            cb(res);
        });
    }
};

// Export ORMs
module.exports = burger;
// Import ORM from orm.js
var orm = require('../config/orm.js');

// ORMs
var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(cb, userInput) {
        orm.insertOne('burgers', 'burger_name', userInput, function(res) {
            cb(res);
        });
    },
    updateOne: function(cb) {
        orm.updateOne('burgers', 'devoured', 1, 'burger_name', function(res) {
            cb(res);
        });
    }
};

// Export ORMs
module.exports = burger;
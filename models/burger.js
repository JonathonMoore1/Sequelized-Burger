// Import ORM from orm.js
var orm = require('../config/orm.js');

// ORMs
var burger = {
    selectAll: function(data) {
        orm.selectAll('burgers', 'burgers_name', data)
    },
    insertOne: function(data) {
        orm.insertOne('burgers', 'burger_name', data)
    },
    updateOne: function(data) {
        orm.updateOne('burgers', 'devoured', 1, 'burger_name', data)
    }
};

// Export ORMs
module.exports = burger;
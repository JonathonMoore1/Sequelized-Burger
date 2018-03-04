// Import ORM from orm.js
var orm = require('../config/orm.js');

// ORMs
var ormQuery = {
    selectAll: function(userInput) {
        orm.selectAll('burgers', 'burger_name', userInput)
    },
    insertOne: function(userInput) {
        orm.insertOne('burgers', 'burger_name', userInput)
    },
    updateOne: function(userInput) {
        orm.updateOne('burgers', 'devoured', 1, 'burger_name', userInput)
    }
};

// Export ORMs
module.exports = ormQuery;
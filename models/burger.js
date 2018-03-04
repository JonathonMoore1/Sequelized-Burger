// Import ORM from orm.js
var orm = require('../config/orm.js');

// ORMs

var ormQuery = {
    selectAll: orm.selectAll('burgers', 'burger_name', userInput),
    insertOne: orm.insertOne('burgers', 'burger_name', userInput),
    updateOne: orm.updateOne('burgers', 'devoured', 1, 'burger_name', userInput)
}
// orm.selectAll('burgers', 'burger_name', userInput);
// orm.insertOne('burgers', 'burger_name', userInput);
// orm.updateOne('burgers', 'devoured', 1, 'burger_name', userInput);

// Export ORMs
module.exports = ormQuery;
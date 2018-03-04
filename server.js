// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Express Configuration
var app = express();
var PORT = process.env.PORT | 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import Routes
require('./controllers/burgers_controller.js');

// Listener
app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("Listening on PORT: " + PORT);
});
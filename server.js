// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Define port 
var PORT = process.env.PORT | 3000;

// Express Configuration
var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import Routes
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

// Listener
app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("\nListening on PORT: " + PORT);
});
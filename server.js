// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

// Define port 
var PORT = process.env.PORT || 8000;

// Express Configuration
var app = express();
var server = require('http').createServer(app);
app.use(function(req, res, next) {
    var reqType = req.headers["x-forwarded-proto"];
    reqType == 'https' ? next() : res.redirect("https://" + req.headers.host + req.url);
});

// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// Public files would only load with this configuration.
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import Routes
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

// io.on('connection', function(socket) {
//     console.log('a user connected');
// });

// Listener
app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("\nListening on PORT: " + PORT);
});
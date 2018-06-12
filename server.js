// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Define port 
var PORT = process.env.PORT || 8000;

// Express Configuration
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('Client disconnected')
    })
});

// Listener
http.listen(PORT, function(err) {
    if (err) throw err;
    console.log("\nListening on PORT: " + PORT);
});
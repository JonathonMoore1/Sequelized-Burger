// Dependencies
var express = require('express');
require('../models/burger.js');

// Router
var app = express();

app.get('*', function(req, res) {
    res.sendFile('../views/layouts/main.handlebars');
    console.log("Displaying page...");
});


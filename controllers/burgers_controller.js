// Dependencies
require('../models/burger.js');
var express = require('express');
var router = express.Router();

// Router
var app = express();

router.get('/', function(req, res) {
    res.sendFile(__dirname + '../views/layouts/main.handlebars');
    console.log("Displaying page...");
});

module.exports = router;
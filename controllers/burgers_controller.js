// Dependencies
var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

// Router
// ======================================

// GET route to load the page with the Handlebars object
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

// POST route for adding a burger
router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name,
    function(result) {
        res.json({ id: result.insertId })
    });
});

// PUT route for updating the 'devoured' column
router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    console.log('condition: ' + condition);
    burger.updateOne(condition, function(result) {
        res.json({ id: result.insertId });
    });
});

// "/reset" allows the user to reset the burgers manually
router.put('/reset', function(req, res) {
    burger.resetAll(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        console.log("*** Burgers have been reset ***");
        res.render('index', hbsObj);
    });
});

module.exports = router;
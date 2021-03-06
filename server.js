// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Function
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
require(path.join(__dirname, './app/routing/apiRoutes'))(app);

// Listen to PORT
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


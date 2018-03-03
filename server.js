// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Function
var app = express();
var PORT = process.env.PORT || 3000;

// Listen to PORT
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
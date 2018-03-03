// Dependencies
var path = require("path");

// Export routing functionality
module.exports = function (app) {
    console.log("Routing thru HTML...");

    // Get home.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Get survey.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};
// Dependencies
var path = require("path");
var friends = require("../data/friends");

// Export routing functionality
module.exports = function (app) {
    console.log("Routing Friends thru API...\n");

    // Get Friends JSON
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Post new Friends
    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        console.log("userData = " + JSON.stringify(userData));
        
        // Add new friend
        friends.push(userData);

        // Response
        res.json({status: "OK"});
    });
};
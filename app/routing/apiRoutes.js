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
        var userName = userData.name;
        var userScores = userData.scores;
        console.log("userData = " + JSON.stringify(userData));
        
        // Match scores
        console.log(`${userName}'s scores are ${userScores}`);
        var matchName = "";
        var matchImg = "";
        var compareScore = 100;

        // Loop thru other Friends and check scores
        for (let i = 0; i < friends.length; i++) {
            console.log('Friend = ' + JSON.stringify(friends[i]));
            
            var difference = 0;
            for (let j = 0; j < userScores.length; j++) {
                difference += Math.abs(friends[i].scores[j] - userScores[j]);
                
            }
            console.log('Difference = ' + difference);

            // Find closest match
            if (difference < compareScore) {
                console.log(`\nClosest match with a ${difference} point differential is:`)
                console.log('Name = ' + friends[i].name);
                console.log('Photo = ' + friends[i].photo);

                compareScore = difference;
                matchName = friends[i].name;
                matchImg = friends[i].photo;
            }
        }

        // Add new friend
        friends.push(userData);

        // Response
        res.json({status: "OK"});
    });
};
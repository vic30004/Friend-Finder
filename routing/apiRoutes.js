const friends = require("../app/data/friends");

module.exports = function(app) {
  app.post("/api/friends", function(req, res) {
    let newFriend = req.body.score;
    const scores = [];
    let bestMatch = 0;
    for (let i = 0; i < friends.length; i++) {
      let scoreDiff = 0;
      for (let j = 0; j < newFriend.length; j++) {
        scoreDiff = Math.abs(
          parseInt(friends[i].score[j]) - parseInt(newFriend[j])
        );
      }
      scores.push(scoreDiff);
    }
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] <= scores[bestMatch]) {
        bestMatch = i;
      }
    }

    let bestFriends = friends[bestMatch];
    // res.json(bestFriends);
    res.json(bestFriends);
    friends.push(req.body);
  });

  app.get("/api/friends", function(req, res) {
    console.log(req.body);
    res.json(friends);
  });

  app.post("/api/clear", function(req, res) {
    friends.length = [];
    res.json({
      ok: true
    });
  });
};

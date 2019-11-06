"user strict";
var sql = require("./db.js");

//Game object constructor
var Game = function(game) {
  this.playerName = game.playerName;
  this.score = game.score;
  this.created = new Date();
};

Game.createGame = function(newGame, result) {
  sql.query("INSERT INTO games set ?", newGame, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

//GET ALL GAMES
Game.getAllGame = function(result) {
  sql.query("SELECT * FROM games ORDER BY score DESC, created", function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("games : ", res);

      result(null, res);
    }
  });
};

module.exports = Game;

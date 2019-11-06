"use strict";

const Game = require("../model/appModel.js");

exports.list_all_games = function(req, res) {
  Game.getAllGame(function(err, game) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", game);
    res.send(game);
  });
};

exports.create_a_game = function(req, res) {
  const new_game = new Game(req.body);

  //handles null error
  if (!new_game.playerName || !new_game.score) {
    res
      .status(400)
      .send({ error: true, message: "Error: player name or score missing" });
  } else {
    Game.createGame(new_game, function(err, game) {
      if (err) res.send(err);
      res.json(game);
    });
  }
};

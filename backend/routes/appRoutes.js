const games = require("../controller/appController");

("use strict");
module.exports = function(app) {
  app
    .route("/games")
    .get(games.list_all_games)
    .post(games.create_a_game);
};

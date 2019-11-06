import React from "react";

import { Route, Switch, useHistory } from "react-router-dom";
import SubscribePanel from "./components/welcome-page/WelcomePage";
import GameBoard from "./components/game/GameBoard";
import LeaderBoard from "./components/leader-board/LeaderBoard";

const App = () => {
  let history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <SubscribePanel history={history} />
      </Route>
      <Route exact path="/game-board">
        <GameBoard history={history} />
      </Route>
      <Route exact path="/leader-board">
        <LeaderBoard history={history} />
      </Route>
    </Switch>
  );
};

export default App;

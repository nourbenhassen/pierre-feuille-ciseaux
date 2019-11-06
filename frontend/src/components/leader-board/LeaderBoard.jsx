import React, { useState, useEffect } from "react";
import axios from "axios";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "../app-bar/AppBar";
import SportsEsports from "@material-ui/icons/SportsEsports";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh"
  }
}));

const LeaderBoard = ({ history }) => {
  const classes = useStyles();
  const nbWinners = 20;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/games")
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={classes.container}>
      <AppBar history={history} redirectUrl="/" Icon={SportsEsports} />
      <h1>All time winners: </h1>

      {data.length > 0 ? (
        <table>
          <tr>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
          {data.map((item, i) =>
            i < nbWinners ? (
              <tr key={item.id}>
                <th>{item.playerName}</th>
                <th>{item.score}</th>
              </tr>
            ) : null
          )}
        </table>
      ) : (
        <p>No winner</p>
      )}
    </div>
  );
};

export default LeaderBoard;

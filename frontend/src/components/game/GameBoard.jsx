import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";
import makeStyles from "@material-ui/core/styles/makeStyles";

import AppBar from "../app-bar/AppBar";
import PlayCard from "./PlayCard";

import Button from "@material-ui/core/Button";
import Assessment from "@material-ui/icons/Assessment";

import * as rock from "../../app/images/rock.png";
import * as paper from "../../app/images/paper.png";
import * as cisor from "../../app/images/cisor.png";
import * as questionMark from "../../app/images/question-mark.png";

const ROCK = "rock";
const PAPER = "paper";
const CISOR = "cisor";
const nbOfRounds = 3;
let playerHistory = [];

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh"
  },
  playerChoices: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  boardGame: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60vw",
    marginBottom: theme.spacing(4)
  },
  versus: {
    fontSize: "4em"
  }
}));

const GameBoard = ({ history }) => {
  const classes = useStyles();
  const [game, setGame] = useState(false);
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);

  const [scoreRound, setScoreRound] = useState(0);
  const [round, setRound] = useState(0);
  const [victory, setVictory] = useState(0);
  const playerName = window.name;

  useEffect(() => {
    if (round === nbOfRounds && game) {
      //if human wins total score (victory) increments
      if (scoreRound > round - scoreRound) {
        setVictory(victory + 1);
        setGame(false);
      } else {
        //if computer wins save score & username in DB ==> game ends
        playerHistory = [];
        axios
          .post("http://localhost:5000/games", {
            playerName,
            score: victory
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        setVictory(0);
      }
      setGame(false);
    }
  });

  if (!playerName) {
    return <Redirect to="/" />;
  }

  const startGame = () => {
    setScoreRound(0);
    setComputer(null);
    setPlayer(null);
    setRound(0);
    setGame(true);
  };

  const computerPlays = () => {
    //AI can be improven
    if (!computer) {
      //The Double Run Rule: if player plays twice same thing, computer assumes that third time will be smth else
      if (
        playerHistory.length > 2 &&
        playerHistory[playerHistory.length - 2] ===
          playerHistory[playerHistory.length - 3]
      ) {
        let c = null; //choice
        let h = playerHistory[playerHistory.length - 1]; //history
        h === ROCK
          ? (c = CISOR)
          : h === CISOR
          ? (c = PAPER)
          : (h = PAPER ? (c = ROCK) : null);
        setComputer(c);
        return c;
      } else {
        //random choice
        const choices = [ROCK, PAPER, CISOR];
        const index = Math.floor(Math.random() * 3);
        setComputer(choices[index]);
        return choices[index];
      }
    }
  };

  // function saves winner for each round (player or computer)
  const saveWinner = (playerChoice, computerChoice) => {
    //if player or computer did not play yet, function returns null
    if (!playerChoice || !computerChoice) return null;

    //if fair game score stays constant and game continues
    if (playerChoice === computerChoice) {
      setTimeout(() => {
        setComputer(null);
        setPlayer(null);
      }, 2000);
      return null;
    }
    //if human wins player round score increments
    if (
      (playerChoice === ROCK && computerChoice === CISOR) ||
      (playerChoice === CISOR && computerChoice === PAPER) ||
      (playerChoice === PAPER && computerChoice === ROCK)
    ) {
      setScoreRound(scoreRound + 1);
    }
    // round increments whether computer or human wins for each game
    if (round < nbOfRounds) setRound(round + 1);

    setTimeout(() => {
      setComputer(null);
      setPlayer(null);
    }, 1000);
  };

  const handleClick = element => {
    if (game && !player && !computer) {
      setPlayer(element);
      playerHistory = [...playerHistory, element];
      const computer = computerPlays();
      saveWinner(element, computer);
    }
  };

  return (
    <div className={classes.container}>
      <AppBar history={history} redirectUrl="/leader-board" Icon={Assessment} />
      <br />
      <h1>Choose wisely, {playerName} ...</h1>
      <div className={classes.boardGame}>
        <div className={classes.playerChoices}>
          <PlayCard image={rock} alt={ROCK} handleClick={handleClick} />
          <PlayCard image={paper} alt={PAPER} handleClick={handleClick} />
          <PlayCard image={cisor} alt={CISOR} handleClick={handleClick} />
        </div>
        <p className={classes.versus}>VS</p>
        <div className={classes.playerChoices}>
          <PlayCard
            image={
              !computer
                ? questionMark
                : computer === ROCK
                ? rock
                : computer === PAPER
                ? paper
                : cisor
            }
            alt={"Waiting for computer"}
          />
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        disabled={game}
        onClick={startGame}
      >
        Next game
      </Button>
      <p>Your score: {scoreRound} </p>
      <p>Computer score: {round - scoreRound}</p>
      <p>Number of rounds left: {nbOfRounds - round}</p>
      <p>Number of victories: {victory}</p>
    </div>
  );
};

export default GameBoard;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Assessment from "@material-ui/icons/Assessment";

import AppBar from "../app-bar/AppBar";

const useStyles = makeStyles(theme => ({
  pageContent: {
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    alignItems: "center",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  title: {
    fontSize: "3em",
    margin: `${theme.spacing(4)}px auto`
  },
  button: {
    margin: `${theme.spacing(6)}px auto`
  },
  container: {
    display: "flex",
    flexDirection: "column"
  }
}));

const WelcomePage = ({ history }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  window.name = name;

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <div className={classes.pageContent}>
      <AppBar history={history} redirectUrl="/leader-board" Icon={Assessment} />

      <h1 className={classes.title}>Enter your name, competitor !</h1>
      <form className={classes.container}>
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          margin="normal"
          value={name}
          onChange={handleChange}
        />
        <Link to="/game-board">
          <Button
            type="submit"
            className={classes.button}
            color={"primary"}
            variant="contained"
          >
            Play
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default WelcomePage;

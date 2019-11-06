import React from "react";
import DefaultAppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Assessment from "@material-ui/icons/Assessment";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  appBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    flex: 1,
    textAlign: "center"
  },
  iconButton: {
    alignSelf: "flex-end",
    justifySelf: "flex-end"
  }
}));

const AppBar = ({ redirectUrl, history, Icon = Assessment }) => {
  const classes = useStyles();

  return (
    <DefaultAppBar className={classes.appBar} position="fixed">
      <span className={classes.title}>Rock - Paper - Cisors Clash</span>
      <IconButton
        className={classes.iconButton}
        onClick={() => history.push(redirectUrl)}
        color="inherit"
      >
        <Icon />
      </IconButton>
    </DefaultAppBar>
  );
};

export default AppBar;

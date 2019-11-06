import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  image: {
    margin: `${theme.spacing(3)}px auto`,
    height: 100
  }
}));

const PlayCard = ({ image, alt, handleClick }) => {
  const classes = useStyles();
  return (
    <img
      className={classes.image}
      src={image}
      alt={alt}
      onClick={() => {
        handleClick(alt);
      }}
    />
  );
};

export default PlayCard;

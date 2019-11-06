const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const expressApp = express();

expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(bodyParser.json({}));
expressApp.use(cors());

expressApp.get("/", (req, res, next) => {
  res.send("hello world");
});

module.exports = expressApp;

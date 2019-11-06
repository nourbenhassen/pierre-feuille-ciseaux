"user strict";

var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "api",
  password: "api2019@",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;

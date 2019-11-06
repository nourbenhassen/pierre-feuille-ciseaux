const http = require("http");
const config = require("../config");
const expressApp = require("../app/app");
const routes = require("../routes/appRoutes");

const server = http.createServer(expressApp);

server.listen(config.APP.PORT, config.APP.HOST);
server.on("listening", () => {
  console.log(`Listening on port : ${config.APP.PORT}`);
});

routes(expressApp); //register the route

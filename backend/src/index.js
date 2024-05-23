const dotenv = require("dotenv");
const logger = require("./configs/logger.js");
const app = require("./app.js");

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 5000;

let server;

server = app.listen(port, () => {
  logger.info(`App Running on Port: ${port}`);
});

//handle server Error

const exitHandler = () => {
  if (server) {
    logger.info("Server Closed.");
    process.exit(1);
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

//SIGTERM
process.on("SIGTERM", () => {
  if (server) {
    logger.info("Server Closed.");
    process.exit(1);
  }
});

import app from "./app.js";
import logger from "./configs/logger.js";

//env variables
const PORT = process.env.PORT || 5000;
let server;

server = app.listen(PORT, () => {
  logger.info(`Server is listening on ${PORT}`);
  // console.log("Process id", process.pid);
});

const exithandler = (error) => {
  if (server) {
    logger.info("Server Clsed.");
    process.exit(1);
  } else {
    process.exit(1);
  }
};

//handle Server Errors
const unexpectedErrorhandler = (error) => {
  logger.error(error);
  exithandler();
};

process.on("uncahughtException", unexpectedErrorhandler);
process.on("unHandledRejection", unexpectedErrorhandler);

//Sigterm
process.on("SIGTERM", () => {
  if (server) {
    logger.info("Server Clsed.");
    process.exit(1);
  }
});

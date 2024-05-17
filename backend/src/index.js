import mongoose from "mongoose";
import app from "./app.js";
import logger from "./configs/logger.js";

//env variables
const { DATABASE_URL } = process.env;
const PORT = process.env.PORT || 5000;

//exit on mongodb Error
mongoose.connection.on("error", (err) => {
  logger.error(`Mongodb Connection Error:${err}`);
  process.exit(1);
});

// Mongodb debug mode
if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

//mongodb connection
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to Mongodb");
  });

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

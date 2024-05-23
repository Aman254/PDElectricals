const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const serviceRouter = require("./routes/serviceRoutes.js");
const userRouter = require("./routes/userRoutes.js");

const app = express();

//1) Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(helmet());

//2) Routes
app.use("/api/v1/services", serviceRouter);
app.use("/api/v1/auth", userRouter);

module.exports = app;

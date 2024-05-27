const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const serviceRouter = require("./routes/serviceRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const createHttpError = require("http-errors");
const cookieParser = require("cookie-parser");

const app = express();

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());
app.use(cookieParser());
app.use(compression());

//cors
app.use(
  cors({ origin: "http://localhost:3000", origin: "http://localhost:3001" })
);

//2) Routes
app.use("/api/v1/services", serviceRouter);
app.use("/api/v1/auth", userRouter);

app.use(async (req, res, next) => {
  next(createHttpError.NotFound("This route does not exist"));
});

//Error Handling
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

module.exports = app;

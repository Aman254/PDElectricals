import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";

//dotenv config
dotenv.config();

//create express app
const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

//Helmet
app.use(helmet());

//parse json request body
app.use(express.json());

//parse json request body
app.use(express.urlencoded({ extended: true }));

//sanitize request Data
app.use(mongoSanitize());

//Enable Cookie-parser
app.use(cookieParser());

//gazip compression
app.use(compression());

//file upload
app.use(fileUpload({ useTempFiles: true }));

//cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/", (req, res) => {
  res.send(req.body);
});

export default app;

const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("../configs/logger.js");
const Service = require("../models/serviceModel.js");

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE_URL;

mongoose
  .connect(DB, {})
  .then(() => logger.info("DB connection successful"))
  .catch((err) => logger.error("DB connection error:", err));
// Read json file
const services = JSON.parse(
  fs.readFileSync(`${__dirname}/Alldata.json`, "utf-8")
);

//Import Data into Database
const importData = async () => {
  try {
    await Service.create(services);
    logger.info("Data Sucessfully Loaded");
    process.exit();
  } catch (error) {
    logger.error("Error in importing Data:", error);
    process.exit();
  }
};

//Delete Data
const deleteData = async () => {
  try {
    await Service.deleteMany();
    logger.info("Data Deleated Sucessfully");
    process.exit();
  } catch (error) {
    logger.error("Error in Deleting Data:", error);
    process.exit();
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

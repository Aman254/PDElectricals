const dotenv = require("dotenv");
const logger = require("./configs/logger.js");
const app = require("./app.js");

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  logger.info(`App Running on Port: ${port}`);
});

import app from "./app.js";
import logger from "./configs/logger.js";

//env variables
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info("Server is listening on PORT", PORT);
});

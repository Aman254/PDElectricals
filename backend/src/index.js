import app from "./app.js";

//env variables
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is Listening on PORT", PORT);
});

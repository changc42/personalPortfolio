const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(__dirname);
});

app.get("/something", (req, res) => {
  res.send("yo moomm");
});

app.use(express.static("public"));

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});

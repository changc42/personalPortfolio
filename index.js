const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const path = require("path");
  console.log(__dirname);
  res.sendFile(path.resolve(__dirname, "public/panda2.jpg"));
});

app.get("/something", (req, res) => {
  res.send("yo moomm");
});

app.use(express.static("public"));

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});

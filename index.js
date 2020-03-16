const express = require("express");
const app = express();

app.get("/api/", (req, res) => {
  res.send("home page of express routes");
});

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  const path = require("path");
  console.log(process.env);
  res.sendFile(path.resolve(__dirname, "client/build/index.html"));
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});

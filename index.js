const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const path = require("path");
  res.sendFile(path.resolve(__dirname, "public/panda2.jpg"));
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});

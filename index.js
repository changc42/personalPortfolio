const express = require("express");
const path = require("path");
const app = express();

let setupRoutes = require("./routes");

setupRoutes(app);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});

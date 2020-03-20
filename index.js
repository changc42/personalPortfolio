const express = require("express");
const path = require("path");
const app = express();

if (process.env.NODE_ENV == "production")
  require("./routes/productionSetup")(app);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});

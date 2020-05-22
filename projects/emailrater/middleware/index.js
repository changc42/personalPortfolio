let setupCookies = require("./cookie");
let setupRoutes = require("./routes");

let express = require("express");
let router = express.Router();

let db = {};

router.use((req, res, next) => {
  console.log("database: ", db);
  next();
});
setupCookies(router, db);
setupRoutes(router, db);

module.exports = router;

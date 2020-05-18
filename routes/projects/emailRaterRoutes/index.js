let setupCookies = require("./cookie");
let setupRoutes = require("./routes");

var express = require("express");
var router = express.Router();

setupCookies(router);
setupRoutes(router);

module.exports = router;

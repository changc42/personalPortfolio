var express = require("express");
var router = express.Router();

router.get("/api/auth", (req, res) => {
  res.end("at api/auth");
});

router.get("*", (req, res) => {
  res.end("404444");
});

module.exports = router;

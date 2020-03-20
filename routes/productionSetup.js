const express = require("express");

module.exports = app => {
  app.use(express.static("client/build"));
  app.use(express.static("public"));
  app.get("*", (req, res) => {
    const path = require("path");
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
};

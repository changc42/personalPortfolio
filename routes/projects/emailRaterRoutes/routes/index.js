const path = require("path");
const fs = require("fs");
let apiAuth = require("./api/auth");
const apiAuthredirect = require("./api/authredirect");
const apiGetAndAssessMessages = require("./api/getAndAssessMessages");
const sendResults = require("./api/sendResults");
const express = require("express");
const url = require("url");

let db = {
  accessToken: null,
  myMessageList: [],
  myMessageListCache: [],
};

module.exports = (app) => {
  app.get("/api/auth", (req, res) => {
    apiAuth(req, res, db);
  });

  app.get("/api/authredirect", (req, res) => {
    apiAuthredirect(req, res, db);
  });

  app.get("/api/getAndAssessMessages", (req, res) => {
    apiGetAndAssessMessages(req, res, db);
  });

  app.get("/api/sendResults", (req, res) => {
    sendResults(req, res, db);
  });

  app.use(express.static("build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname(routes),
        "../../../../client/projects/emailrater/build/index.html"
      )
    ); //emailRaterRoutes/projects/routes/personalportfolio/client/projects/emailrater/build/index.html
  });
};

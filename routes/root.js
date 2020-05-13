const express = require("express");
const path = require("path");
const fs = require("fs");
const emailRaterRoutes = require("./projects/emailRaterRoutes");

module.exports = (app) => {
  app.use(express.static("client"));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/root/build/index.html"));
  });

  //for serverless react projects
  app.get("/projects/:projectName", (req, res) => {
    if (
      fs.existsSync(
        `./client/projects/${req.params.projectName}/build/index.html`
      )
    ) {
      res.sendFile(
        path.resolve(
          __dirname,
          `../client/projects/${req.params.projectName}/build/index.html`
        )
      );
    } else {
      res.send("the project you are looking for does not exist");
    }
  });

  emailRaterRoutes(app);

  app.get("*", (req, res) => {
    res.status(404).send("404. this page does not exist");
  });
};

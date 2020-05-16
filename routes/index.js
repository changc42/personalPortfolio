const express = require("express");
const path = require("path");
const fs = require("fs");
const emailRaterRoutes = require("./projects/emailRaterRoutes");

module.exports = (app) => {
  app.use(express.static("client/root/build"));

  let projects = ["calculator", "dragndrop", "emailrater"];
  projects.forEach((project) =>
    app.use(
      `/projects/${project}`,
      express.static(`client/projects/${project}/build`)
    )
  );

  app.use("/projects/emailrater", emailRaterRoutes);

  app.get("*", (req, res) => {
    res.status(404).send("404. this page does not exist");
  });
};

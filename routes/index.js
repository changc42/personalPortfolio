const express = require("express");
const path = require("path");
const fs = require("fs");
const emailRaterRoutes = require("./projects/emailRaterRoutes");

module.exports = (app) => {
  app.use((req, res, next) => {
    console.log(req.url, "requested");
    next();
  });
  app.use(express.static("client/root/build"));

  let vanillaHTMLProjects = ["weatherapp"];
  vanillaHTMLProjects.forEach((project) =>
    app.use(
      `/projects/${project}`,
      express.static(`client/projects/${project}`)
    )
  );

  app.use("/projects/emailrater", emailRaterRoutes);

  let reactProjects = ["calculator", "dragndrop", "emailrater", "pokemonwar"];
  reactProjects.forEach((project) =>
    app.use(
      `/projects/${project}`,
      express.static(`client/projects/${project}/build`)
    )
  );

  app.get("*", (req, res) => {
    res.status(404).send("404. this page does not exist");
  });
};

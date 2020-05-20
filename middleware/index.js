const express = require("express");
const path = require("path");
const fs = require("fs");
const emailRaterMW = require("./projects/emailRaterMW");

module.exports = (app) => {
  app.use((req, res, next) => {
    console.log(req.url, "requested");
    next();
  });
  app.use(express.static("client/root/build"));

  let vanillaHTMLProjects = ["weatherapp"];
  vanillaHTMLProjects.forEach((project) =>
    app.use(`/projects/${project}`, express.static(`projects/${project}`))
  );

  let serverReactProjects = ["emailrater"];
  serverReactProjects.forEach((project) => {
    app.use(
      `/projects/${project}`,
      require(path.resolve(__dirname, `../projects/${project}/middleware`))
    );
  });

  let noServerReactProjects = [
    "calculator",
    "dragndrop",
    "emailrater",
    "pokemonwar",
  ];
  noServerReactProjects.forEach((project) =>
    app.use(`/projects/${project}`, express.static(`projects/${project}/build`))
  );

  app.get("*", (req, res) => {
    res.status(404).send("404. this page does not exist");
  });
};

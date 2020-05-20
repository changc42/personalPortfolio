const express = require("express");
const path = require("path");

let router = express.Router();

router.use((req, res, next) => {
  console.log(req.url, "requested");
  next();
});
router.use(express.static("client/build"));

let vanillaHTMLProjects = ["weatherapp"];
vanillaHTMLProjects.forEach((project) =>
  router.use(`/projects/${project}`, express.static(`projects/${project}`))
);

let serverReactProjects = ["emailrater"];
serverReactProjects.forEach((project) => {
  router.use(
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
  router.use(
    `/projects/${project}`,
    express.static(`projects/${project}/build`)
  )
);

router.get("*", (req, res) => {
  res.status(404).send("404. this page does not exist");
});

module.exports = router;

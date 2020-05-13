module.exports = (app) => {
  let home = "/projects/emailrater";
  app.get(`${home}/subpath`, (req, res) => {
    res.end("this is email rater subpath");
  });
};

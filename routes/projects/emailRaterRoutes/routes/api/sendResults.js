module.exports = function sendResults(req, res, db) {
  let toSend = {};
  toSend.myMessageList = db[req.headers.cookie].myMessageList;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(toSend));
};

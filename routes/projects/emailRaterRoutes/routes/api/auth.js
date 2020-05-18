const {
  client_id,
  state,
} = require("../../../../../config/emailraterConfig/keys"); //routes/emailraterRoutes/projects/routes/personalportfolio/config/emailraterConfig/keys
const scopes = require("../../../../../config/emailraterConfig/scopes");
const endpoints = require("../../../../../config/emailraterConfig/endpoints");
const fs = require("fs");
const {
  redirect_uri,
} = require("../../../../../config/emailraterConfig/devVProdRoutes");

module.exports = (req, res, db) => {
  let query = {
    client_id: client_id,
    redirect_uri: redirect_uri,
    response_type: "code",
    scope: scopes.read,
    state: state,
  };

  let queryString = new URLSearchParams(query).toString();
  res.writeHead(302, { Location: `${endpoints.oauth}?${queryString}` });
  res.end();
};

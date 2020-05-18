if (process.env.NODE_ENV === "production") {
  module.exports = {
    redirect_uri:
      "http://me.calebchang.tech/projects/emailrater/api/authredirect",
  };
} else {
  module.exports = {
    redirect_uri: "http://localhost:5000/projects/emailrater/api/authredirect",
  };
}

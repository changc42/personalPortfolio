if (process.env.NODE_ENV === "production") {
  module.exports = {
    redirect_uri: "https://me.calebchang.tech/api/authredirect",
  };
} else {
  module.exports = {
    redirect_uri: "http://localhost:5000/api/authredirect",
  };
}

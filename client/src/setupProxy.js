const proxy = require("http-proxy-middleware");
const local = "http://localhost:5000";

// File for syncing server & client applications

module.exports = function(app) {
  app.use(proxy("/auth/*", { target: local }));
  app.use(proxy("/auth/google/callback", { target: local }));
  app.use(proxy("/api/*", { target: local }));
};

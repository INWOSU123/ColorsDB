const express = require("express");
const app = express();
const methodOverride = require("method-override");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
const path = require("path");
require("dotenv").config();
var exphbs = require("express-handlebars");
const hbs = exphbs.create({
  helpers: {},
  defaultLayout: "main",
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

require(path.join(__dirname, "./routes/color-routes.js"))(app);
module.exports = app;
require(path.join(dirname, "./routes/api-routes.js"))(app);
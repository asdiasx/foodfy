const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const recipes = require("./data");

server.use(express.static("public"));
server.use(express.static("assets"));

server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", function (req, res) {
  return res.render("index", {recipes});
});

server.get("/about", function (req, res) {
  return res.render("about");
});

server.get("/recipes", function (req, res) {
  return res.render("recipes", {recipes});
});

server.get("/recipes/:index", function (req, res) {
  const recipeIndex = req.params.index;
  return res.render("recipe", {recipe: recipes[recipeIndex]});
});

server.use((req, res) => res.status(404).render("not-found"));

server.listen(5000, "0.0.0.0", () => console.log("Server is running"));

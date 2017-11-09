const express = require("express");

const app = express();

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", (request, response, next) => {
  response.render("home.ejs");
});

app.get("/about", (request, response, next) => {
  response.render("about.ejs");
});

app.get("/photos", (request, response, next) => {
  response.render("photos.ejs");
});

app.listen(3001);

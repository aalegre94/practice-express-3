const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

const adminRutas = require("./routes/admin");
const userRutas = require("./routes/users");

app.use(adminRutas);
app.use(userRutas);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found q sed" });
});

app.listen(3001);

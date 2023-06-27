const express = require("express");
const router = express.Router();

const myUsers = [];

//GET
router.get("/", (req, res, next) => {
  res.render("admin", { pageTitle: "Registro de Usuarios" });
});

//POST
router.post("/", (req, res, next) => {
  //console.log(req.body);
  myUsers.push({ nameU: req.body.nameU });
  res.redirect("/users");
});

exports.rutas = router;
exports.usuarios = myUsers;

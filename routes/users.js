const express = require("express");
const router = express.Router();

const adminData = require("./admin");

router.get("/users", (req, res, next) => {
  console.log("admin.js", adminData.usuarios);
  const misUsuarios = adminData.usuarios;
  res.render("users", { users: misUsuarios, pageTitle: "Usuarios" });
});

module.exports = router;

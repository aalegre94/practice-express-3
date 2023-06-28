const Usuario = require("../models/usuario");

//para ver el from de add user
exports.getAddUser = (req, res, next) => {
  res.render("admin", { pageTitle: "Registro de Usuarios" });
};

//para manejar el request de post de user
exports.postAddUser = (req, res, next) => {
  //console.log(req.body);
  //myUsers.push({ nameU: req.body.nameU, lastNameU: req.body.lastNameU });
  const usuario = new Usuario(req.body.nameU, req.body.lastNameU);
  usuario.save();
  res.redirect("/users");
};

//para mostrar los users
exports.getUsers = (req, res, next) => {
  const misUsuarios = Usuario.fetchAll();
  console.log("admin.js", misUsuarios);
  //const misUsuarios = myUsers;
  res.render("users", { users: misUsuarios, pageTitle: "Usuarios" });
};

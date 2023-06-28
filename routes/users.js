const express = require("express");
const router = express.Router();

const userController = require("../controller/usuarios");

router.get("/users", userController.getUsers);

module.exports = router;

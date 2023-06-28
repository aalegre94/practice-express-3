const express = require("express");
const router = express.Router();

const userController = require("../controller/usuarios");

//GET
router.get("/", userController.getAddUser);

//POST
router.post("/", userController.postAddUser);

module.exports = router;

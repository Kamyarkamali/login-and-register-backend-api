const { Router } = require("express");
const { authRegister, login } = require("../controller/auth.controller");

const router = Router();

router.post("/register", authRegister);
router.post("/login", login);

module.exports = {
  AuthRouters: router,
};

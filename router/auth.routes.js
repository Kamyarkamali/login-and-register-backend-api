const { Router } = require("express");
const { authRegister, login } = require("../controller/auth.controller");
const { registerValid } = require("../validation/auth.validation");
const { validationResult } = require("express-validator");

const router = Router();

router.post(
  "/register",
  registerValid(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  authRegister
);

router.post("/login", login);

module.exports = {
  AuthRouters: router,
};

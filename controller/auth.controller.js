const { usserModel } = require("../model/model.user");
const { hashPassword } = require("../utils/auth.util");

async function authRegister(req, res, next) {
  try {
    const { email, password, ConfirmPassword, fullName } = req.body;
    const createUserModel = await usserModel.create({
      fullName,
      password: hashPassword(password, ConfirmPassword),
      email,
    });
    res.send(createUserModel);
  } catch (error) {
    next(error);
  }
}

function login(req, res, next) {
  res.send("login");
}

module.exports = {
  authRegister,
  login,
};

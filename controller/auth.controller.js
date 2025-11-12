const { usserModel } = require("../model/model.user");
const {
  hashPassword,
  compatePassword,
  singToken,
} = require("../utils/auth.util");

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

async function login(req, res, next) {
  const { email, password } = req.body;
  const user = await usserModel.findOne({ email });

  if (!user)
    throw {
      status: 400,
      message: "user not found",
    };

  if (compatePassword(password, user.password)) {
    const token = singToken({ id: user._id, email: user.email });
    res.send({ token, message: "register successfully" });
  } else
    throw {
      status: 401,
      message: "email or password incorret ",
    };
}

module.exports = {
  authRegister,
  login,
};

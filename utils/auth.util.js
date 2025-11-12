const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");

function hashPassword(password) {
  const salt = genSaltSync(11);
  return hashSync(password, salt);
}

function compatePassword(password, hashed) {
  return compareSync(password, hashed);
}

// create token
const singToken = (payload) => {
  return jwt.sign(payload, process.env.secret);
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.secret);
};

module.exports = {
  hashPassword,
  compatePassword,
  singToken,
  verifyToken,
};

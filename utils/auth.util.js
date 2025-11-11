const { genSaltSync, hashSync, compareSync } = require("bcrypt");

function hashPassword(password) {
  const salt = genSaltSync(11);
  return hashSync(password, salt);
}

function compatePassword(password, hashed) {
  return compareSync(password, hashed);
}

module.exports = {
  hashPassword,
  compatePassword,
};

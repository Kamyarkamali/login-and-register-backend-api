const { body } = require("express-validator");

const registerValid = () => [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("fullName is required")
    .isLength({ min: 6, max: 30 })
    .withMessage(
      "Username cannot be less than 6 characters and more than 30 characters."
    ),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("The email format is not correct."),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 5, max: 15 })
    .withMessage(
      "Password cannot be less than 5 characters and more than 15 characters."
    ),

  body("ConfirmPassword")
    .trim()
    .notEmpty()
    .withMessage("confirmPassword is required")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("The password values ​​are not equal."),
];

module.exports = {
  registerValid,
};

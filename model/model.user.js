const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
});

const usserModel = mongoose.model("user", userSchema);

module.exports = {
  usserModel,
};

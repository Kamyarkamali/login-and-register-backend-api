const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/mongo-tutorials";

const connectionDB = async () => {
  try {
    await mongoose.connect(DB_URL);
  } catch (error) {
    console.log(error && error.messege);
  }
};

module.exports = connectionDB;

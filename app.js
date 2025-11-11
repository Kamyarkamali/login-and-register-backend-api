const express = require("express");
const { notFoundPage, errorHandeler } = require("./utils/error-handeling");
const { AllRouter } = require("./router/index.routes");
const app = express();
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
mongoose.connect("mongodb://localhost:27017/tutorials");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(AllRouter);

app.use(notFoundPage);
app.use(errorHandeler);

app.listen(3000, () => {
  console.log(`server Run http://localhost:${process.env.PORT}`);
});

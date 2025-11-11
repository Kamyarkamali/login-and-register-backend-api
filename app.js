const express = require("express");
const { notFoundPage, errorHandeler } = require("./utils/error-handeling");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(notFoundPage);
app.use(errorHandeler);

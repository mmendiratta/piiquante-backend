const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const sauceRoutes = require("./routes/SauceRoutes");
const userRoutes = require("./routes/UserRoutes");

const app = express();
mongoose
  .connect(
    `mongodb+srv://piiquante:${process.env.MONGO_PASSWORD}@cluster0.cnvd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to mongodb atlas");
  })
  .catch((error) => {
    console.log("unable to connect to mondodb");
    console.error(error);
  });

app.use("", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;

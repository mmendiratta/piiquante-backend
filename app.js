const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://manni:${process.env.MONGO_PASSWORD}!@cluster0.cnvd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to mongodb atlas");
  })
  .catch((error) => {
    console.log("unable to connect to mondodb");
    console.error(error);
  });

const app = express();

app.use((req, res) => {
  res.json({ message: "Your request was successfull" });
});

module.exports = app;

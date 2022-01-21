const User = require("../models/UserModel");

exports.signupUser = (req, res) => {
  res.status(201).json({ message: "signed up user" });
};

exports.loginUser = (req, res) => {
    res.status(200).json({ message: "logged user" });
};

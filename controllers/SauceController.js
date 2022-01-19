const Sauce = require("../models/SauceModel");

exports.getAllSauces = (req, res) => {
  Sauce.find()
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.getOneSauce = (req, res) => {
  res.status(200).json(`successful get of ${req.params.id}`);
};

exports.createSauce = (req, res) => {
  req.body.sauce = JSON.parse(req.body.sauce);
  console.log(req.body);
  res.status(201).json("successful creation of sauce");
  //   req.body.sauce = JSON.parse(req.body.sauce);
  //   const sauce = new Sauce({
  //       // create unique id
  //     name: req.body.sauce,
  //     manufacturer: "",
  //     description:"",
  //     mainPepper: "",
  //     // TODO: update image url
  //     imageUrl: "",
  //     heat: 0,
  //     likes: 0,
  //     dislikes: 0,
  //     usersLiked: [],
  //     usersDisliked: [],
  //   });

  //   sauce
  //     .save()
  //     .then(() => {
  //       res.status(201).json({ message: "successful creation of sauce" });
  //     })
  //     .catch((error) => {
  //       res.status(400).json({ error: error });
  //     });
};

exports.setSauceLike = (req, res) => {
  res.status(201).json("successful creation of sauce like");
};

exports.updateSauce = (req, res) => {
  res.status(204).json("successful update of sauce");
};

exports.deleteSauce = (req, res) => {
  res.status(200).json(`successful delete of ${req.params.id}`);
};

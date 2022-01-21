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
  Sauce.findOne({
    _id: req.params.id,
  })
    .then((sauce) => {
      res.status(200).json(sauce);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.createSauce = (req, res) => {
  req.body.sauce = JSON.stringify(req.body.sauce);
  const sauce = new Sauce({
    // create unique id
    name: req.body.sauce,
    manufacturer: "",
    description: "",
    mainPepper: "",
    // TODO: update image url
    imageUrl: "",
    heat: 0,
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    usersDisliked: [],
  });

  sauce
    .save()
    .then(() => {
      res.status(201).json({ message: "successful creation of sauce" });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.setSauceLike = (req, res) => {
  res.status(201).json("successful creation of sauce like");
};

exports.updateSauce = (req, res) => {
  res.status(204).json("successful update of sauce");
};

exports.deleteSauce = (req, res) => {
  console.log(req.params.id);
  Sauce.findOne({ _id: req.params.id }).then(() => {
    Sauce.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Sauce deleted!",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  });
};

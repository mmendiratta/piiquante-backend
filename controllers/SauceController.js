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
  console.log(req);
  return res.status(200).json({ message: "dummy sauce" });
  //     // console.log(JSON.parse(req.body));
  //   const sauceString = JSON.parse(req.body);
  // const sauceString = JSON.parse(req.body.sauce);
  // console.log(sauceString.name);
  const sauce = new Sauce({
    // name: req.body.sauce.name,
    // manufacturer: req.body.sauce.manufacturer,
    // description: req.body.sauce.description,
    // mainPepper: req.body.sauce.mainPepper,
    // // TODO: update image url
    // imageUrl: "",
    // heat: req.body.sauce.heat,
    // likes: 0,
    // dislikes: 0,
    // usersLiked: [],
    // usersDisliked: [],
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

exports.deleteSauce = (req, res) => {
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

exports.setSauceLike = (req, res) => {
  console.log(req);
  res.status(201).json("successful creation of sauce like");
};

exports.updateSauce = (_req, res) => {
  res.status(204).json("successful update of sauce");
};

// Watch for console errors
// Watch for 403s or errors not causing visual errors

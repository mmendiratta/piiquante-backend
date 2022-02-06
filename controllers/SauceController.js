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
  const sauceString = JSON.parse(req.body.sauce);
  const url = req.protocol + "://" + req.get("host");
  const sauce = new Sauce({
    name: sauceString.name,
    manufacturer: sauceString.manufacturer,
    description: sauceString.description,
    mainPepper: sauceString.mainPepper,
    imageUrl: url + "/images/" + req.file.filename,
    heat: sauceString.heat,
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
  const likeStatus = req.body.like;
  Sauce.findOne({ _id: req.params.id }).then((sauce) => {
    if (likeStatus == 1) {
      const newList = sauce.usersLiked;
      newList.push(req.body.userId);
      const likeTotal = sauce.likes + 1;
      Sauce.updateOne(
        { _id: req.params.id },
        {
          likes: likeTotal,
          usersLiked: newList,
        }
      )
        .then(() => {
          res.status(201).json("Sauce like updated!");
        })
        .catch((error) => {
          res.status(400).json({
            error: error,
          });
        });
    } else if (likeStatus == -1) {
      const newList = sauce.usersDisliked;
      newList.push(req.body.userId);
      const disLikeTotal = sauce.dislikes + 1;
      Sauce.updateOne(
        { _id: req.params.id },
        {
          dislikes: disLikeTotal,
          usersDisliked: newList,
        }
      )
        .then(() => {
          res.status(201).json("Sauce dislike updated!");
        })
        .catch((error) => {
          res.status(400).json({
            error: error,
          });
        });
    } else {
      if (sauce.usersLiked.includes(req.body.userId)) {
        const newList = sauce.usersLiked;
        const filteredList = newList.filter((item) => {
          return item !== req.body.userId;
        });
        const likeTotal = sauce.likes - 1;
        Sauce.updateOne(
          { _id: req.params.id },
          {
            likes: likeTotal,
            usersLiked: filteredList,
          }
        )
          .then(() => {
            res.status(201).json("Sauce like removed!");
          })
          .catch((error) => {
            res.status(400).json({
              error: error,
            });
          });
      } else {
        const newList = sauce.usersDisliked;
        const filteredList = newList.filter((item) => {
          return item !== req.body.userId;
        });
        const disLikeTotal = sauce.dislikes - 1;
        Sauce.updateOne(
          { _id: req.params.id },
          {
            dislikes: disLikeTotal,
            usersDisliked: filteredList,
          }
        )
          .then(() => {
            res.status(201).json("Sauce dislike removed!");
          })
          .catch((error) => {
            res.status(400).json({
              error: error,
            });
          });
      }
    }
  });
};

exports.updateSauce = (req, res) => {
  let updatedSauce = new Sauce({ _id: req.params.id });
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    const sauceString = JSON.parse(req.body.sauce);
    updatedSauce = {
      _id: req.params.id,
      name: sauceString.name,
      manufacturer: sauceString.manufacturer,
      description: sauceString.description,
      mainPepper: sauceString.mainPepper,
      imageUrl: url + "/images/" + req.file.filename,
      heat: sauceString.heat,
      likes: sauceString.likes,
      dislikes: sauceString.dislikes,
      usersLiked: sauceString.usersLiked,
      usersDisliked: sauceString.usersDisliked,
    };
  } else {
    updatedSauce = {
      _id: req.params.id,
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      description: req.body.description,
      mainPepper: req.body.mainPepper,
      imageUrl: req.body.imageUrl,
      heat: req.body.heat,
      likes: req.body.likes,
      dislikes: req.body.dislikes,
      usersLiked: req.body.usersLiked,
      usersDisliked: sauceString.usersDisliked,
    };
  }
  Sauce.updateOne({ _id: req.params.id }, updatedSauce)
    .then(() => {
      res.status(204).json({ message: "Updated Sauce!" });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

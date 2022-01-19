exports.getAllSauces = (req, res) => {
  res.status(200).json("successful get of all");
};

exports.getOneSauce = (req, res) => {
  res.status(200).json(`successful get of ${req.params.id}`);
};

exports.createSauce = (req, res) => {
  res.status(201).json("successful creation of sauce");
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

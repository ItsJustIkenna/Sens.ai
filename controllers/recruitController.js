const db = require("../models");

// Defining methods for the recruitController
module.exports = {
  findAll: function (req, res) {
    db.Recruit.find(req.query)
      .populate("Ikigai")
      .populate("Messages")
      .populate("Skills")
      .populate("Projects")
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Recruit.findById(req.params.id)
      .populate("Ikigai")
      .populate("Messages")
      .populate("Skills")
      .populate("Projects")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Recruit.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Recruit.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.Recruit.findOneAndDelete({ _id: req.params.id }, req.body)
      .then((dbModel) => dbModel.delete())
      .catch((err) => res.status(422).json(err));
  },
};

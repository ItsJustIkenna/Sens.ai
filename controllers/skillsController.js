const db = require("../models");

// Defining methods for the skillsController
module.exports = {
  findAll: function (req, res) {
    db.Skills.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Skills.findById(req.query.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Skills.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Skills.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.Skills.findOneAndDelete({ _id: req.params.id }, req.body)
      .then((dbModel) => dbModel.delete())
      .catch((err) => res.status(422).json(err));
  },
};
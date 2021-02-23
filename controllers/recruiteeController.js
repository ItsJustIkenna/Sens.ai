const db = require("../models");

// Defining methods for the recruiteeController
module.exports = {
  findAll: function (req, res) {
    db.Recruitee.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Recruitee.findById(req.query.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Recruitee.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Recruitee.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.Recruitee.findOneAndDelete({ _id: req.params.id }, req.body)
      .then((dbModel) => dbModel.delete())
      .catch((err) => res.status(422).json(err));
  },
};

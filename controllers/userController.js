const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .populate("Recruit")
      .populate("Recruiter")
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .populate("Recruit")
      .populate("Recruiter")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.User.findOneAndDelete({ _id: req.params.id }, req.body)
      .then((dbModel) => dbModel.delete())
      .catch((err) => res.status(422).json(err));
  },
};

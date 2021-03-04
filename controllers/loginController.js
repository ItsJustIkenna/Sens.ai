const db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log(req.body);
    db.Recruiter.findOne({ email: req.body.email })
      .then((dbModel) => {
        if (dbModel) {
          if (dbModel.password === req.body.password) {
            res.json(dbModel._id);
          } else {
            res.json("email or password not found");
          }
        } else {
          res.json("email or password not found");
        }
      })
      .catch((err) => res.status(422).json(err));
  },
};

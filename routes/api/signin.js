const router = require("express").Router();
const signInController = require("../../controllers/signInController");

// Matches with "/api/signin"
router
  .route("/")
  .post(signInController.create);

  module.exports = router;
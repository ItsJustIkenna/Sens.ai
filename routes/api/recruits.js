const router = require("express").Router();
const recruitController = require("../../controllers/recruitController");

// Matches with "/api/books"
router
  .route("/")
  .get(recruitController.findAll)
  .post(recruitController.create);

// Matches with "/api/recruitController/:id"
router
  .route("/:id")
  .get(recruitController.findById)
  .put(recruitController.update)
  .delete(recruitController.delete);

module.exports = router;

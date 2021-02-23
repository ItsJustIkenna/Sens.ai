const router = require("express").Router();
const ikigaiController = require("../../controllers/ikigaiController");

// Matches with "/api/books"
router.route("/").get(ikigaiController.findAll).post(ikigaiController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(ikigaiController.findById)
  .put(ikigaiController.update)
  .delete(ikigaiController.delete);

module.exports = router;

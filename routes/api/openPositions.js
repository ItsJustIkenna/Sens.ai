const router = require("express").Router();
const openPositionsController = require("../../controllers/openPositionsController");

// Matches with "/api/books"
router
  .route("/")
  .get(openPositionsController.findAll)
  .post(openPositionsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(openPositionsController.findById)
  .put(openPositionsController.update)
  .delete(openPositionsController.delete);

module.exports = router;

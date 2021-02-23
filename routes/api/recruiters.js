const router = require("express").Router();
const recruiterController = require("../../controllers/recruiterController");

// Matches with "/api/books"
router
  .route("/")
  .get(recruiterController.findAll)
  .post(recruiterController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(recruiterController.findById)
  .put(recruiterController.update)
  .delete(recruiterController.delete);

module.exports = router;

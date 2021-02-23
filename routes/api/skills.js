const router = require("express").Router();
const skillsController = require("../../controllers/skillsController");

// Matches with "/api/books"
router
  .route("/")
  .get(skillsController.findAll)
  .post(skillsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(skillsController.findById)
  .put(skillsController.update)
  .delete(skillsController.delete);

module.exports = router;
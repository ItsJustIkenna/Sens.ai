const router = require("express").Router();
const recruiteeController = require("../../controllers/recruiteeController");

// Matches with "/api/books"
router
  .route("/")
  .get(recruiteeController.findAll)
  .post(recruiteeController.create);

// Matches with "/api/recruiteeController/:id"
router
  .route("/:id")
  .get(recruiteeController.findById)
  .put(recruiteeController.update)
  .delete(recruiteeController.delete);

module.exports = router;

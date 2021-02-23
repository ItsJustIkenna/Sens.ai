const router = require("express").Router();
const messagesController = require("../../controllers/messagesController");

// Matches with "/api/books"
router
  .route("/")
  .get(messagesController.findAll)
  .post(messagesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(messagesController.findById)
  .put(messagesController.update)
  .delete(messagesController.delete);

module.exports = router;

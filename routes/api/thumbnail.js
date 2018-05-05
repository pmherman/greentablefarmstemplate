const router = require("express").Router();
const thumbnailsController = require("../../controllers/thumbnailsController");

// Matches with "/api/thumbnail"
router.route("/")
  .get(thumbnailsController.findAll)
  .post(thumbnailsController.create);

// Matches with "/api/thumbnail/:id"
router
  .route("/:id")
  .get(thumbnailsController.findById)
  .put(thumbnailsController.update)
  .delete(thumbnailsController.remove);

module.exports = router;

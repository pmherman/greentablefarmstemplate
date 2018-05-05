const router = require("express").Router();
const cafeController = require("../../controllers/cafeController");

// Matches with "/api/cafe"
router.route("/")
  .get(cafeController.findAll)
  .post(cafeController.create);

// Matches with "/api/cafe/:id"
router
  .route("/:id")
  .get(cafeController.findById)
  .put(cafeController.update)
  .delete(cafeController.remove);

module.exports = router;

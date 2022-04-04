const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  postThought,
  updateThought,
  deleteThought,
  postReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThought).post(postThought);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:id/reactions").post(postReaction);

router.route("/:id/reactions/:reactionId").delete(deleteReaction);

module.exports = router;

const router = require("express").Router();
const {
  get_AllThoughts,
  get_ThoughtsById,
  create_Thoughts,
  update_Thoughts,
  delete_Thoughts,
  add_Reaction,
  remove_Reaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(get_AllThoughts).post(create_Thoughts);

// /api/thoughts/:id
router
  .route("/:id")
  .get(get_ThoughtsById)
  .put(update_Thoughts)
  .delete(delete_Thoughts);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(add_Reaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(remove_Reaction);

module.exports = router;

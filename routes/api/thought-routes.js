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


router.route("/").get(get_AllThoughts).post(create_Thoughts);

router
  .route("/:id")
  .get(get_ThoughtsById)
  .put(update_Thoughts)
  .delete(delete_Thoughts);

router.route("/:thoughtId/reactions").post(add_Reaction);

router.route("/:thoughtId/reactions/:reactionId").delete(remove_Reaction);

module.exports = router;

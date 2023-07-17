const router = require("express").Router();
const {
  get_AllUser,
  get_UserById,
  create_User,
  update_User,
  delete_User,
  add_Friend,
  remove_Friend,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(get_AllUser).post(create_User);

// /api/users/:id
router.route("/:id").get(get_UserById).put(update_User).delete(delete_User);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(add_Friend).delete(remove_Friend);

module.exports = router;

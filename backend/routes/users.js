const router = require("express").Router();
const User = require("../models/user.model");

// i.e. if the route is task-board.com/users/
router.route("/").get(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/add").post(async (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  try {
    newUser.save();
    res.json("User added!!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;

const router = require("express").Router();
const Columns = require("../models/columns.model");

router.route("/").get(async (req, res) => {
  try {
    const columns = await Columns.find();
    res.json(columns);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/add").post(async (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const tasks = req.body.tasks;
  const backgroundColour = req.body.backgroundColour;

  const newColumn = new Columns({ username, name, tasks, backgroundColour });

  try {
    const column = await newColumn.save();
    res.json("Column added: " + column);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;

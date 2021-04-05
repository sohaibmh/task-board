const router = require("express").Router();
const Tasks = require("../models/tasks.model");

router.route("/").get(async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.json(tasks);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/add").post(async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const board = req.body.board;

  const newTask = new Tasks({
    title,
    description,
    board,
  });

  try {
    const task = await newTask.save();
    res.json("Task added: " + task);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;

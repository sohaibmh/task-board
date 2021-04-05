const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

// used to allow environment variables in the env file
require("dotenv").config();

// creating the express server
const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

const usersRouter = require("./routes/users");
const columnsRouter = require("./routes/columns");
const tasksRouter = require("./routes/tasks");

// middlewares
app.use(cors());
// allows to parse json
app.use(express.json());

app.use("/users", usersRouter);
app.use("/columns", columnsRouter);
app.use("/tasks", tasksRouter);

// starting the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

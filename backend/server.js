import express from "express";
import cors from "cors";
import columns from "./api/columns.route.js";

// const mongoose = require("mongoose");

// used to allow environment variables in the env file
// require("dotenv").config();

// creating the express server
const app = express();
// const port = process.env.PORT || 5000;

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB connection established successfully");
// });

// const usersRouter = require("./routes/users");
// const columnsRouter = require("./routes/columns");
// const tasksRouter = require("./routes/tasks");

// middlewares
app.use(cors());
// allows to parse json
app.use(express.json());

// app.use("/users", usersRouter);
// app.use("/columns", columnsRouter);
// app.use("/tasks", tasksRouter);

// starting the server
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

// main route i.e. every route will start from this
app.use("/api/v1/columns", columns);
app.use("*", (req, res) => res.status(404).json({ error: "not found ref12" }));

export default app;

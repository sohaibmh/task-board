import express from "express";
import cors from "cors";
import routes from "./api/routes.js";

// creating the express server
const app = express();

// middlewares
app.use(cors());

// to parse json (allows the server to accept json in the body of a request)
app.use(express.json());

// main route i.e. every route will start from this
app.use("/api/v1", routes);
app.use("*", (req, res) => res.status(404).json({ error: "not found ref12" }));

export default app;

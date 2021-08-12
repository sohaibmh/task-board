import express from "express";
import ColumnsController from "./columns.controller.js";

const router = express.Router();

router.route("/").get(ColumnsController.getColumn);

export default router;

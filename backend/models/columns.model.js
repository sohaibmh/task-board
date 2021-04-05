const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const columnsSchema = new Schema(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    tasks: { type: Array, required: true },
    backgroundColour: { type: String, required: true },
  },
  { timestamps: true }
);

const Columns = mongoose.model("Columns", columnsSchema);

module.exports = Columns;

import app from "./server.js";
import dotenv from "dotenv";
import ColumnsDAO from "./dao/columnsDAO.js";

import ColumnsController from "./api/columns.controller.js";

// load in the environment variables
dotenv.config();

const port = process.env.PORT || 8000;

async function main() {
  try {
    // await ColumnsDAO.getColumnListing();

    // await ColumnsController.getColumn();

    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
}

main().catch(console.error);

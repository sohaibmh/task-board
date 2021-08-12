import app from "./server.js";
import dotenv from "dotenv";
import ColumnsDAO from "./dao/columnsDAO.js";

// load in the environment variables
dotenv.config();

const port = process.env.PORT || 8000;

async function main() {
  try {
    await ColumnsDAO.getColumnListing();

    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
}

main().catch(console.error);

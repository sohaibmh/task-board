import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
// load in the environment variables
dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

// the second argument is options for accessing the database
MongoClient.connect(process.env.ATLAS_URI, {
  poolSize: 50,
  wimeout: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  });

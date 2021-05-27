import mongodb from "mongodb";
import dotenv from "dotenv";

// load in the environment variables
dotenv.config();

// used to connect to the mongodb database
const MongoClient = mongodb.MongoClient;

async function main() {
  const uri = process.env.ATLAS_URI;

  // creating an instance of mongo client
  const client = new MongoClient(uri);

  try {
    // connecting to the cluster
    await client.connect();

    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    // ending connection to the cluster
    await client.close();
  }

  console.log("hi");
}

main();

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases: ", databasesList);
}

async function createListing(client, newListing) {}

// mongodb stores data in bson documents, which is binary represantation of json
// you can think of documents as a js object, which is roughly equivalent to a row in a table

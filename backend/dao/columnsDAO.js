// data access object
// allows access to the database

import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

export default class ColumnsDAO {
  static async getColumnListing() {
    const uri = process.env.TASKBOARD_DB_URI;
    const client = new MongoClient(uri);

    try {
      await client.connect();
      await this.findOneListingByName(client, "Homework");
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  }

  static async findOneListingByName(client, nameOfListing) {
    const result = await client
      .db("myFirstDatabase")
      .collection("columns")
      .findOne({ name: nameOfListing });

    if (result) {
      console.log(
        `Found a listing in the collection with the name '${nameOfListing}':`
      );
      console.log(result);
    } else {
      console.log(`No listings found with the name '${nameOfListing}'`);
    }
  }
}

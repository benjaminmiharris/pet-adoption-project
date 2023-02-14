const { ObjectId } = require("mongodb");
let usersCollection;

module.exports = class UsersDAO {
  static async injectDB(connection) {
    if (!connection) return;
    try {
      usersCollection = await connection.collection("users");
    } catch (e) {
      console.log(`Could not establish connection to users collection ${e}`);
    }
  }

  static async createUser(userData) {
    userData.created_on = new Date();
    await usersCollection.insertOne({ ...userData });
  }

  static async getUserByEmail(email) {
    return await usersCollection.findOne({ email });
  }

  static async getUserById(userId) {
    return await usersCollection.findOne({ _id: new ObjectId(userId) });
  }
};

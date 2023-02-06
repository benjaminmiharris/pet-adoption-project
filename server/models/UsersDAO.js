let collection;

module.exports = class UsersDAO {
  static async injectDB(connection) {
    if (!connection) return;
    try {
      collection = await connection.collection("users");
    } catch (e) {
      console.log(`Could not establish connection to users collection ${e}`);
    }
  }

  static async createUser(userData) {
    userData.created_on = new Date();
    await collection.insertOne({ ...userData });
  }

  static async getUserByEmail(email) {
    return await collection.findOne({ email });
  }
};

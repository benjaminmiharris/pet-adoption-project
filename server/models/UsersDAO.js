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
};

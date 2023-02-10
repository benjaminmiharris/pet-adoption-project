let petsCollection;

module.exports = class PetsDAO {
  static async injectDB(connection) {
    if (!connection) return;
    try {
      petsCollection = await connection.collection("pets");
    } catch (e) {
      console.log(`Could not establish connection to users collection ${e}`);
    }
  }

  static async createPet(petData) {
    petData.created_on = new Date();
    await petsCollection.insertOne({ ...petData });
  }
};

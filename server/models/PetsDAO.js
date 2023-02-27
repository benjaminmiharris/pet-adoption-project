const { ObjectId } = require("mongodb");

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
    console.log("Create pet record", petData);
    petData.created_on = new Date();
    await petsCollection.insertOne({ ...petData });
  }

  static async getPetById(petId) {
    return await petsCollection.findOne({ _id: new ObjectId(petId) });
  }

  static async getPets(query) {
    return await petsCollection.find(query).toArray();
  }

  static async updatePetStatus(petId, adoptionStatus) {
    let petStatus = adoptionStatus;

    await petsCollection.updateOne(
      { _id: new ObjectId(petId) },
      { $set: { pet_adoptionStatus: petStatus } }
    );

    //add pet id to user document
  }
};

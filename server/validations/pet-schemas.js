const Ajv = require("ajv");
const ajv = new Ajv();

module.exports.addPetValidation = ajv.compile({
  type: "object",
  properties: {
    pet_type: { type: "array", items: { type: "string" } },
    pet_name: { type: "string", maxLength: 50 },
    pet_age: { type: "string" },
    pet_gender: {
      type: "array",
      items: { type: "string", enum: ["Male", "Female", "Unknown"] },
    },
    pet_adoptionStatus: {
      type: "array",
      items: { type: "string", enum: ["Adopted", "Fostered", "Available"] },
    },
    pet_height: { type: "number" },
    pet_weight: { type: "number" },
    pet_color: { type: "string" },
    pet_bio: { type: "string", maxLength: 200 },
    pet_hypoallergenic: { type: "boolean" },
    pet_dietary: { type: "string" },
    pet_breed: { type: "string" },
    user_id: { type: "string" },
    petImage: { type: "string" },
  },

  required: ["pet_type", "pet_name", "pet_breed"],
});

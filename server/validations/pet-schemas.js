const Ajv = require("ajv");
const ajv = new Ajv();

module.exports.addPetValidation = ajv.compile({
  type: "object",
  properties: {
    pet_type: {
      type: "array",
      items: {
        type: "string",
        enum: [
          "Dogs",
          "Cats",
          "Birds",
          "Fish",
          "Rabbits",
          "Hamsters",
          "Guinea Pigs",
          "Turtles",
          "Snakes",
          "Lizards",
        ],
      },
    },
    pet_name: { type: "string", maxLength: 50 },
    pet_age: { type: "number" },
    pet_gender: {
      type: "array",
      items: { type: "string", enum: ["Male", "Female", "Unknown"] },
    },
    pet_adoptionStatus: {
      type: "array",
      items: {
        type: "string",
        enum: ["Adopted", "Looking for home", "Foster"],
      },
    },
    pet_height: { type: "number" },
    pet_weight: { type: "number" },
    pet_color: { type: "string" },
    pet_bio: { type: "string", maxLength: 200 },
    pet_hypoallergenic: { type: "boolean" },
    pet_dietary: { type: "string" },
    pet_breed: { type: "string" },
  },

  required: ["pet_type", "pet_name", "pet_breed"],
});

// const testObject = {
//   pet_type: ["Cats"],
//   pet_name: "TesterCat",
//   pet_age: 12,
//   pet_gender: ["Unknown"],
//   pet_adoptionStatus: ["Looking for home"],
//   pet_height: 12,
//   pet_weight: 12,
//   pet_color: "dsf",
//   pet_bio: "sdfds",
//   pet_dietary: "dsfdsf",
//   pet_breed: "sdfsdf",
// };

// console.log(addPetValidation(testObject));
// console.log(addPetValidation.errors);

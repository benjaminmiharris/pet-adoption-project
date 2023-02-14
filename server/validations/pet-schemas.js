const Ajv = require("ajv");
const ajv = new Ajv();

const addPetSchema = {
  type: "object",
  properties: {
    type: { type: "string" },
    name: { type: "string", maxLength: 50 },
    status: {
      type: "string",
      enum: ["Adopted", "Fostered", "Availible"],
    },
    height: { type: "number" },
    weight: { type: "number" },
    color: { type: "string" },
    bio: { type: "string", maxLength: 200 },
    hypoallergenic: { type: "boolean" },
    dietary: { type: "string" },
    breed: { type: "string" },
    user_id: { type: "string" },
    petImage: { type: "string" },
  },
  required: ["type", "name", "breed"],
};

// const testerPet = {
//   type: "Harry",
//   name: "Harry",
//   status: "Adopted",
//   imageURL: "www.website.org",
//   height: 123,
//   weight: 456,
//   color: "red",
//   bio: "Harry is a good boy",
//   hypoallergenic: true,
//   dietary: "NA",
//   breed: "German Shep",
// };

// console.log(validate(testerPet));

module.exports.addPetValidation = ajv.compile(addPetSchema);

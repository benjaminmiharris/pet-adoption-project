const Ajv = require("ajv");
const ajv = new Ajv();

const newUserSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    mobile: { type: "number" },
    email: { type: "string" },
    password: { type: "string", minLength: 8, maxLength: 24 },
  },
  required: ["firstName", "lastName", "email", "password"],
};

// const testerUser = {
//   firstName: "Benj",
//   lastName: "Harris",
//   mobile: 073,
//   email: "nemj@gmail.com",
//   password: "jsdfdsjfjsf",
// };

// const userValidation = ajv.compile(newUserSchema);

// console.log(userValidation(testerUser));

module.exports.userValidation = ajv.compile(newUserSchema);

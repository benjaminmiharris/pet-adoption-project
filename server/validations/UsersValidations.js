const Ajv = require("ajv");
const ajv = new Ajv();

module.exports.RegisterValidation = ajv.compile({
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    mobile: { type: "number" },
    email: { type: "string" },
    password: { type: "string" },
    userBio: { type: "string" },
  },
  required: ["firstName", "lastName", "email", "password"],
  additionalProperties: false,
});

module.exports.LoginValidation = ajv.compile({
  type: "object",
  properties: {
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["email", "password"],
  additionalProperties: false,
});

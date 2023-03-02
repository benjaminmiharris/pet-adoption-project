const Ajv = require("ajv");
const ajv = new Ajv();

module.exports.RegisterValidation = ajv.compile({
  type: "object",
  properties: {
    firstName: { type: "string", minLength: 1 },
    lastName: { type: "string", minLength: 1 },
    mobile: { type: "string", pattern: "^[0-9]{10}$" },
    email: { type: "string" },
    password: { type: "string", minLength: 5 },
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

module.exports.UpdateValidation = ajv.compile({
  type: "object",
  properties: {
    firstName: { type: "string", minLength: 1 },
    lastName: { type: "string", minLength: 1 },
    mobile: { type: "string", pattern: "^[0-9]{10}$" },
    email: { type: "string" },
    userBio: { type: "string" },
  },
  required: ["firstName", "lastName", "email"],
  additionalProperties: false,
});

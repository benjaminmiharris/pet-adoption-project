const Ajv = require("ajv");
const ajv = new Ajv();

module.exports.RegisterValidation = ajv.compile({
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    mobile: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["firstName", "lastName", "email", "password"],
  additionalProperties: false,
});

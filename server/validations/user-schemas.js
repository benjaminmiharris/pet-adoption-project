const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });

const newUserSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    mobile: { type: "number" },
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["firstName", "lastName", "email", "password"],
};

module.exports.userValidation = ajv.compile(newUserSchema);

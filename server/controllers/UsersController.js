const sha256 = require("js-sha256");
const jwt = require("jsonwebtoken");

const UsersDAO = require("../models/UsersDAO");
const {
  RegisterValidation,
  LoginValidation,
} = require("../validations/UsersValidations");

module.exports = class UsersController {
  static register = async (req, res) => {
    try {
      const isValid = RegisterValidation(req.body);
      console.log("Validation outcome", isValid);

      if (!isValid) {
        return res
          .status(400)
          .send({ success: false, message: "Please fill all fields" });
      }

      const userObject = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.password,
      };

      const exisitingUser = await UsersDAO.getUserByEmail(userObject.email);

      if (exisitingUser) {
        return res.status(400).json({
          success: false,
          message:
            "Looks like you already have an account with this email account. Please try logging in!",
        });
      }

      userObject.password = sha256(userObject.password);

      await UsersDAO.createUser(userObject);
      return res.json(req.body);
    } catch (e) {
      console.log(`Error in UsersController.Register ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  };

  static login = async (req, res) => {
    try {
      const isValid = LoginValidation(req.body);

      if (!isValid) {
        return res
          .status(400)
          .send({ success: false, message: "Please fill all fields" });
      }

      const userObject = {
        email: req.body.email,
        password: req.body.password,
      };

      const exisitingUser = await UsersDAO.getUserByEmail(userObject.email);

      if (exisitingUser.password != sha256(req.body.password)) {
        return res.status(400).send({
          success: false,
          message: "unsuccessful login attempt try again.",
        });
      }

      const token = jwt.sign(
        {
          user_id: exisitingUser._id,
        },
        process.env.JWT_SECERET
      );

      return res.status(200).send({
        success: true,
        message: "successful login.",
        token: token,
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: "unsuccessful login attempt try again.",
      });
    }
  };
};

const sha256 = require("js-sha256");
const jwt = require("jsonwebtoken");
const PetsDAO = require("../models/PetsDAO");

const UsersDAO = require("../models/UsersDAO");
const {
  RegisterValidation,
  LoginValidation,
  UpdateValidation,
} = require("../validations/UsersValidations");

module.exports = class UsersController {
  static register = async (req, res) => {
    try {
      const isValid = RegisterValidation(req.body);

      if (!isValid) {
        return res.status(400).send({
          success: false,
          message: "There was an error. Please try again.",
        });
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
            "Looks like you already have an account with this email. Please try logging in!",
        });
      }

      userObject.password = sha256(userObject.password);

      await UsersDAO.createUser(userObject);
      return res
        .status(200)
        .json({ success: true, message: "New account created. Please log in" });
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
          message: "Error. Wrong password.",
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
        message: "Error. Account does not match our records.",
      });
    }
  };

  static getUserProfile = async (req, res) => {
    try {
      return res.status(200).send({
        success: true,
        message: "Profile data sent to client",
        user: req.currentUser,
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: error,
      });
    }
  };

  static updateUserProfile = async (req, res) => {
    try {
      const isValid = UpdateValidation(req.body);

      if (isValid) {
        const userObject = req.body;

        await UsersDAO.updateUser(req.params, userObject);

        return res.status(200).send({
          success: true,
          message: "Profile updated",
        });
      } else {
        return res.status(400).send({
          success: false,
          message: "update not valid",
        });
      }
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: error,
      });
    }
  };

  static savePetToUserProfile = async (req, res) => {
    try {
      const savePetId = req.params.id;

      //Get user
      //Check user to see if the liked pet already exisits in the array
      //if not then add to array ELSE return 400

      const currentUser = await UsersDAO.getUserById(req.currentUser._id);

      const foundPetId = currentUser.savedPets.some(
        (pet) => pet._id == savePetId
      );

      if (foundPetId) {
        // The array contains an object with the specified key and value

        await UsersDAO.removeLikedPetFromUser(
          req.currentUser._id,
          req.params.id
        );

        return res.status(400).send({
          success: true,
          message: "This pet has already been added and needs to be removed",
        });
      } else {
        // The array doesn't contain an object with the specified key and value

        await UsersDAO.addLikedPetToUser(req.currentUser._id, req.params.id);

        return res.status(200).send({
          success: true,
          message: "Pet added",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: error,
      });
    }
  };

  static adoptOrFosterAPet = async (req, res) => {
    try {
      const petId = req.params.id;

      const adoptionStatus = req.body.status;

      console.log("adoptionStatus", adoptionStatus);

      await PetsDAO.updatePetStatus(petId, adoptionStatus);

      //Check if pet is in liked pets

      const currentUser = await UsersDAO.getUserById(req.currentUser._id);

      if (adoptionStatus !== "Looking for home") {
        let foundPetIdSavedPets;

        if (currentUser.myPets) {
          foundPetIdSavedPets = currentUser.savedPets.some(
            (pet) => pet._id == petId
          );
        }

        if (foundPetIdSavedPets) {
          // The array contains an object with the specified key and value

          await UsersDAO.removeLikedPetFromUser(
            req.currentUser._id,
            req.params.id
          );
        }

        await UsersDAO.adoptOrFosterPet(req.currentUser._id, petId);
      } else {
        console.log("Removed Pet");
        await UsersDAO.removeAdoptedPetFromUser(req.currentUser._id, petId);
      }

      return res.status(200).send({
        success: true,
      });

      //Check if pet is in My pets and if it is replace with new object
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: error,
      });
    }
  };
};

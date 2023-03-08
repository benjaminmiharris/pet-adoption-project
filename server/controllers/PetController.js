// const { addPetValidation } = require("../validations/pet-schemas");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

const PetsDAO = require("../models/PetsDAO");
const UsersDAO = require("../models/UsersDAO");

module.exports = class PetsController {
  static createPet = async (req, res) => {
    try {
      const petObject = req.body;

      petObject.user_id = req.currentUser._id;
      petObject.petImage = req.petImage;

      await PetsDAO.createPet(petObject);

      return res.status(200).json({ success: true, message: "New pet added." });
    } catch (error) {
      console.log(`Error in PetsController.createPet ${e}`);
      return res.status(500).json({
        success: false,
        message: "Error creating pet.",
      });
    }
  };

  static getPets = async (req, res) => {
    const params = req.query;

    const query = {};

    if (params.petType) {
      query.pet_type = { $regex: new RegExp(params.petType, "i") };
    }
    if (params.petStatus) {
      query.pet_adoptionStatus = { $regex: new RegExp(params.petStatus, "i") };
    }
    if (params.petName) {
      query.pet_name = { $regex: new RegExp(params.petName, "i") };
    }
    if (params.petHeight) {
      query.pet_height = params.petHeight;
    }
    if (params.petWeight) {
      query.pet_weight = params.petWeight;
    }

    try {
      const results = await PetsDAO.getPets(query);
      return res.status(200).json({
        results,
      });
    } catch (error) {
      console.log(error);
    }

    const results = await PetsDAO.getPets(query);
    console.log(results);
    return res.status(400).send({
      success: false,
      message: error,
    });
  };

  static getPetId = async (req, res) => {
    try {
      const { id } = req.params;

      const response = await PetsDAO.getPetById(id);

      return res.status(200).json({
        success: true,
        message: response,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: "Pet was not found. Please try again.",
      });
    }
  };

  static getPetIds = async (req, res) => {
    const idArray = req.currentUser.myPets;

    //get request user id

    //set variable with the petsId from the user object
    try {
      const response = await PetsDAO.getPetByIds(idArray);

      return res.status(200).json({
        success: true,
        message: response,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        success: false,
        message: "Pet was not found. Please try again.",
      });
    }
  };

  static updatePetObject = async (req, res) => {
    try {
      const currentUser = await UsersDAO.getUserById(req.currentUser._id);

      const petId = req.params.id;

      const petObject = req.body;

      console.log("petId", petId);
      console.log("petObject", petObject);

      if (currentUser.role == "admin") {
        try {
          await PetsDAO.updatePet(petId, petObject);
        } catch (error) {
          console.log(error);
        }
        console.log("This user is an admin");
      } else {
        return res.status(400).send({
          success: false,
          message:
            "This user does not have admin rights to carry out this action.",
        });
      }

      return res.status(200).send({
        success: true,
        message: "Worked",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "Error",
      });
    }
  };
};

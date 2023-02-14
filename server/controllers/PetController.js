const { addPetValidation } = require("../validations/pet-schemas");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const PetsDAO = require("../models/PetsDAO");

module.exports = class PetsController {
  static createPet = async (req, res) => {
    try {
      const petObject = req.body;
      console.log(req.file);

      petObject.user_id = req.currentUser._id;
      petObject.petImage = req.petImage;

      console.log("PETOBJECT", petObject);
      console.log("petObject.user_id", petObject.user_id);

      // const isValid = addPetValidation(petObject);

      // if (!isValid) {
      //   return res
      //     .status(400)
      //     .send({ success: false, message: "Please fill all fields" });
      // }

      await PetsDAO.createPet(petObject);

      return res.json({
        pet: petObject,
      });
    } catch (error) {
      console.log(`Error in PetsController.createPet ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  };

  static getPets = async (req, res) => {
    const { pet_name, pet_adoptionStatus, pet_type, pet_height, pet_weight } =
      req.query;

    const resultsArray = this.petsArray.filter((pet) => {
      if (
        pet_adoptionStatus.toLowerCase() &&
        pet.pet_adoptionStatus.toLowerCase() !==
          pet_adoptionStatus.toLowerCase()
      )
        return false;
      if (
        pet_type.toLowerCase() &&
        pet.pet_type.toLowerCase() !== pet_type.toLowerCase()
      )
        return false;
      if (
        pet_height.toLowerCase() &&
        pet.pet_height.toLowerCase() !== pet_height.toLowerCase()
      )
        return false;
      if (
        pet_weight.toLowerCase() &&
        pet.pet_weight.toLowerCase() !== pet_weight.toLowerCase()
      )
        return false;
      if (
        pet_name.toLowerCase() &&
        pet.pet_name.toLowerCase() !== pet_name.toLowerCase()
      )
        return false;

      return true;
    });

    if (resultsArray.length > 0) {
      return res.json(resultsArray);
    } else {
      return res.json(this.petsArray);
    }
  };

  static getPetId = async (req, res) => {
    const { id } = req.params;

    const resultsArray = this.petsArray.filter((pet) => pet.pet_id === id);

    return res.json(resultsArray);
  };
};

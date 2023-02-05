const uniqid = require("uniqid");
const fs = require("fs");
const { addPetValidation } = require("../validations/pet-schemas");

class PetClass {
  petsArray = [];

  constructor() {
    let fileContent;
    try {
      fileContent = fs.readFileSync("data/pets.json");
      this.petsArray = JSON.parse(fileContent);
    } catch (e) {
      console.log(e);
    }
  }

  CreatePet = (req, res) => {
    const isValid = addPetValidation(req.body);
    if (!isValid) {
      return res.status(400).send();
    }

    const id = uniqid();
    const createdOn = new Date();

    this.petsArray.push({
      pet_id: id,
      pet_createdOn: createdOn,
      pet_type: req.body.type,
      pet_name: req.body.name,
      pet_adoptionStatus: req.body.status,
      pet_imageURL: req.body.imageURL,
      pet_height: req.body.height,
      pet_weight: req.body.weight,
      pet_color: req.body.color,
      pet_bio: req.body.bio,
      pet_hypoallergenic: req.body.hypoallergenic,
      pet_dietary: req.body.dietary,
      pet_breed: req.body.breed,
    });

    try {
      fs.writeFileSync("data/pets.json", JSON.stringify(this.petsArray));
    } catch (e) {
      console.log(e);
      return res.status(500).json();
    }

    return res.status(200).json({ success: true, id: id });
  };

  GetPets = (req, res) => {
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

  GetPetId = (req, res) => {
    const { id } = req.params;

    const resultsArray = this.petsArray.filter((pet) => pet.pet_id === id);

    return res.json(resultsArray);
  };
}

module.exports = PetClass;

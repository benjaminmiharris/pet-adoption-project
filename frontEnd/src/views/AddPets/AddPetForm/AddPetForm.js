import * as React from "react";
import { useContext, useState, useRef } from "react";

import Box from "@mui/material/Box";
import MultiSelectChips from "../../../components/inputs/MultiSelectChips";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

import TextField from "@mui/material/TextField";
import { PetContext } from "../../../context/PetContext";
import { Button } from "@mui/material";

import {
  ADOPTION_STATUS_ARRAY,
  PETS_ARRAY,
  GENDER_ARRAY,
} from "../../../constants";
import { useParams } from "react-router-dom";
import { getPetIdAPI } from "../../../helpers/createPetAPI";

const AddPetForm = () => {
  const [petData, setPetData] = useState([]);

  const {
    updatePetObject,
    setPetResults,
    petAge,
    setPetAge,
    petGender,
    setPetGender,
    createPetObject,
    petType,
    setPetType,
    petName,
    setPetName,
    petAdoptionStatus,
    setpetAdoptionStatus,
    petHeight,
    setPetHeight,
    petWeight,
    setPetWeight,
    petColor,
    setPetColor,
    petBio,
    setPetBio,
    petHypoallergenic,
    setPetHypoallergenic,
    petDiet,
    setPetDiet,
    petBreed,
    setPetBreed,
    petImage,
    setpetImage,
  } = useContext(PetContext);

  let { id } = useParams();

  const getPetDataFromAPI = async (petId) => {
    const results = await getPetIdAPI(petId);
    await setPetData(results.results.message);
  };

  React.useEffect(() => {
    if (id) {
      getPetDataFromAPI(id);
    }
  }, [id]);

  React.useEffect(() => {
    populateFieldsWithPetData();
  }, [petData]);

  const populateFieldsWithPetData = () => {
    setPetName(petData.pet_name);
    setpetAdoptionStatus(petData.pet_adoptionStatus);
    setPetType(petData.pet_type);
    setPetGender(petData.pet_gender);
    setPetAge(petData.pet_age);
    setPetHeight(petData.pet_height);
    setPetWeight(petData.pet_weight);
    setPetColor(petData.pet_color);
    setPetBio(petData.pet_bio);
    setPetHypoallergenic(petData.pet_hypoallergenic);
    setPetDiet(petData.pet_dietary);
    setPetBreed(petData.pet_breed);
  };

  const handleChangeStatus = (event) => {
    setpetAdoptionStatus(event);
  };

  const handleChangePets = (event) => {
    setPetType(event);
  };

  const handleChangeGender = (event) => {
    setPetGender(event);
  };

  const fieldWidth = "35ch";

  console.log("petAdoptionStatus", petAdoptionStatus);
  return (
    <>
      <Box
        component="form"
        sx={{ display: "flex", flexWrap: "wrap" }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={petName || ""}
          label="Name"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setPetName(e.target.value)}
        />
        <MultiSelectChips
          chipLabel="Status"
          chipsArray={ADOPTION_STATUS_ARRAY}
          onChangeHandler={handleChangeStatus}
        />

        <MultiSelectChips
          chipLabel="Pets"
          chipsArray={PETS_ARRAY}
          onChangeHandler={handleChangePets}
        />

        <MultiSelectChips
          chipLabel="Gender"
          chipsArray={GENDER_ARRAY}
          onChangeHandler={handleChangeGender}
        />

        <TextField
          value={petAge || ""}
          label="Age"
          type="number"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setPetAge(e.target.value)}
        />

        <TextField
          value={petHeight || ""}
          label="Height (cm)"
          type="number"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setPetHeight(e.target.value)}
        />
        <TextField
          value={petWeight || ""}
          label="Weight (kg)"
          type="number"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setPetWeight(e.target.value)}
        />

        <TextField
          value={petColor || ""}
          label="Color"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setPetColor(e.target.value)}
        />

        <TextField
          value={petBio || ""}
          id="outlined-textarea"
          label="Short bio"
          placeholder="Placeholder"
          multiline
          rows={6}
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setPetBio(e.target.value)}
        />

        <FormControlLabel
          value={petHypoallergenic || ""}
          control={
            <Checkbox
              onChange={(e) => setPetHypoallergenic(e.target.checked)}
            />
          }
          label="Hypoallergenic"
          sx={{ m: 1, width: fieldWidth }}
        />

        <TextField
          value={petDiet || ""}
          label="Diet"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setPetDiet(e.target.value)}
        />
        <TextField
          value={petBreed || ""}
          label="Breed"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setPetBreed(e.target.value)}
        />

        <br />
        <br />

        <input
          type="file"
          // value={inputRef}
          onChange={(e) => {
            setpetImage(e.target.files[0]);
          }}
        />
        {/* <td title="tooltip"> 1200px x 700px</td> */}
      </Box>
      <br />

      {id == null ? (
        <Button onClick={createPetObject}>Submit</Button>
      ) : (
        <Button onClick={updatePetObject}>Update</Button>
      )}
    </>
  );
};

export default AddPetForm;

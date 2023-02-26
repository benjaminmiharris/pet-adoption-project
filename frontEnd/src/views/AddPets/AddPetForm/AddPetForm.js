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

const AddPetForm = () => {
  const {
    createPetObject,
    setpetAdoptionStatus,
    setPetType,
    setPetBreed,
    setPetDiet,
    setPetHypoallergenic,
    setPetBio,
    setPetColor,
    setPetWeight,
    setPetHeight,
    setPetName,
    petImage,
    setpetImage,
    setPetGender,
    setPetAge,
  } = useContext(PetContext);

  const fieldWidth = "35ch";

  const handleChangeStatus = (event) => {
    setpetAdoptionStatus(event);
  };

  const handleChangePets = (event) => {
    setPetType(event);
  };

  const handleChangeGender = (event) => {
    setPetGender(event);
  };

  console.log(petImage);

  return (
    <>
      <form>
        <Box
          component="form"
          sx={{ display: "flex", flexWrap: "wrap" }}
          noValidate
          autoComplete="off"
        >
          <TextField
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
            label="Age"
            type="number"
            //   id="outlined-start-adornment"
            sx={{ m: 1, width: fieldWidth }}
            onChange={(e) => setPetAge(e.target.value)}
          />

          <TextField
            label="Height (cm)"
            type="number"
            //   id="outlined-start-adornment"
            sx={{ m: 1, width: fieldWidth }}
            onChange={(e) => setPetHeight(e.target.value)}
          />
          <TextField
            label="Weight (kg)"
            type="number"
            //   id="outlined-start-adornment"
            sx={{ m: 1, width: fieldWidth }}
            onChange={(e) => setPetWeight(e.target.value)}
          />

          <TextField
            label="Color"
            //   id="outlined-start-adornment"
            sx={{ m: 1, width: fieldWidth }}
            onChange={(e) => setPetColor(e.target.value)}
          />

          <TextField
            id="outlined-textarea"
            label="Short bio"
            placeholder="Placeholder"
            multiline
            rows={6}
            sx={{ m: 1, width: fieldWidth }}
            onChange={(e) => setPetBio(e.target.value)}
          />

          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => setPetHypoallergenic(e.target.checked)}
              />
            }
            label="Hypoallergenic"
            sx={{ m: 1, width: fieldWidth }}
          />

          <TextField
            label="Diet"
            //   id="outlined-start-adornment"
            sx={{ m: 1, width: fieldWidth }}
            onChange={(e) => setPetDiet(e.target.value)}
          />
          <TextField
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
          <td title="tooltip"> 1200px x 700px</td>
        </Box>
        <br />
        <Button onClick={createPetObject}>Submit</Button>
      </form>
    </>
  );
};

export default AddPetForm;

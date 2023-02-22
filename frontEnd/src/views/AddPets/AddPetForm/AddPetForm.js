import * as React from "react";
import { useContext, useState, useRef } from "react";

import Box from "@mui/material/Box";
import MultiSelectChips from "../../../components/inputs/MultiSelectChips";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

import TextField from "@mui/material/TextField";
import { PetContext } from "../../../context/PetContext";
import { ComponentContext } from "../../../context/ComponentContext";
import { Button } from "@mui/material";

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
  } = useContext(PetContext);

  //   const { personName } = useContext(ComponentContext);

  const fieldWidth = "35ch";
  const adoptionStatusArray = ["Adopted", "Looking for home", "Foster"];
  const petsArray = [
    "Dogs",
    "Cats",
    "Birds",
    "Fish",
    "Rabbits",
    "Hamsters",
    "Guinea Pigs",
    "Turtles",
    "Snakes",
    "Lizards",
  ];

  const handleChangeStatus = (event) => {
    setpetAdoptionStatus(event);
  };

  const handleChangePets = (event) => {
    setPetType(event);
  };

  console.log(petImage);

  return (
    <>
      <Box
        component="form"
        sx={{ display: "flex", flexWrap: "wrap" }}
        noValidate
        autoComplete="off"
      >
        <MultiSelectChips
          chipLabel="Status"
          chipsArray={adoptionStatusArray}
          onChangeHandler={handleChangeStatus}
        />

        <MultiSelectChips
          chipLabel="Pets"
          chipsArray={petsArray}
          onChangeHandler={handleChangePets}
        />

        <TextField
          label="Name"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setPetName(e.target.value)}
        />

        <TextField
          label="Height"
          type="number"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setPetHeight(e.target.value)}
        />
        <TextField
          label="Weight"
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
      </Box>
      <br />
      <Button onClick={createPetObject}>Submit</Button>
    </>
  );
};

export default AddPetForm;

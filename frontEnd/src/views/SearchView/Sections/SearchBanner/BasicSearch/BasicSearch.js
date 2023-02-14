import React, { useContext } from "react";
import MultiSelectChips from "../../../../../components/inputs/MultiSelectChips";
import { PetContext } from "../../../../../context/PetContext";

const BasicSearch = () => {
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

  const { setPetType } = useContext(PetContext);

  const handleChangePets = (event) => {
    setPetType(event);
  };

  return (
    <div>
      <MultiSelectChips
        chipLabel="Pets"
        chipsArray={petsArray}
        onChangeHandler={handleChangePets}
      />
    </div>
  );
};

export default BasicSearch;

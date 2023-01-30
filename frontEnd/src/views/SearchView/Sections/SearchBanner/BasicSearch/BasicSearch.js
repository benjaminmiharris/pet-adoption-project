import React from "react";
import MultiSelectChips from "../../../../../components/inputs/MultiSelectChips";

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
  return (
    <div>
      <MultiSelectChips chipLabel="Pets" chipsArray={petsArray} />
    </div>
  );
};

export default BasicSearch;

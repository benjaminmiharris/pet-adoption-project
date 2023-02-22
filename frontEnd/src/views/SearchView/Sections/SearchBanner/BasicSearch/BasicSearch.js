import React, { useContext } from "react";
import MultiSelectChips from "../../../../../components/inputs/MultiSelectChips";
import { PetContext } from "../../../../../context/PetContext";

import { PETS_ARRAY } from "../../../../../constants";

const BasicSearch = () => {
  const { setPetType } = useContext(PetContext);

  const handleChangePets = (event) => {
    setPetType(event);
  };

  return (
    <div>
      <MultiSelectChips
        chipLabel="Pets"
        chipsArray={PETS_ARRAY}
        onChangeHandler={handleChangePets}
      />
    </div>
  );
};

export default BasicSearch;

import React, { useContext } from "react";
import MetricSlider from "../../../../../components/inputs/MetricSlider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { PetContext } from "../../../../../context/PetContext";

import MultiSelectChips from "../../../../../components/inputs/MultiSelectChips";

import { ADOPTION_STATUS_ARRAY } from "../../../../../constants";

import "./advanced-search.css";
import BasicSearch from "../BasicSearch/BasicSearch";

const AdvancedSearch = () => {
  const { setpetAdoptionStatus, setPetName, setPetHeight, setPetWeight } =
    useContext(PetContext);

  const handleChangeStatus = (event) => {
    setpetAdoptionStatus(event);
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <BasicSearch />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <MultiSelectChips
          chipLabel="Status"
          chipsArray={ADOPTION_STATUS_ARRAY}
          onChangeHandler={handleChangeStatus}
        />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <TextField
          id="outlined-search"
          label="Name Search"
          type="search"
          sx={{ m: 1, width: "350px" }}
          onChange={(e) => {
            setPetName(e.target.value);
          }}
        />
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center">
        <TextField
          label="Height"
          type="number"
          sx={{ m: 1, width: "166px" }}
          onChange={(e) => setPetHeight(e.target.value)}
        />
        <TextField
          label="Weight"
          type="number"
          sx={{ m: 1, width: "166px" }}
          onChange={(e) => setPetWeight(e.target.value)}
        />
      </Box>

      {/* <Box display="flex" alignItems="center" justifyContent="center">
        <div className="adv-search-grp">
          <MetricSlider sliderLabel={"Height"} />
        </div>
        <div className="adv-search-grp">
          <MetricSlider sliderLabel={"Weight"} />
        </div>
      </Box> */}
    </>
  );
};

export default AdvancedSearch;

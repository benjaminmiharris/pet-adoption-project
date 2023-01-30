import React from "react";
import MetricSlider from "../../../../../components/inputs/MetricSlider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import MultiSelectChips from "../../../../../components/inputs/MultiSelectChips";

import "./advanced-search.css";
import BasicSearch from "../BasicSearch/BasicSearch";

const AdvancedSearch = () => {
  const adoptionStatusArray = ["Adopted", "Looking for home", "Foster"];
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <BasicSearch />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <MultiSelectChips chipLabel="Status" chipsArray={adoptionStatusArray} />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <TextField
          id="outlined-search"
          label="Name Search"
          type="search"
          sx={{ m: 1, width: "350px" }}
        />
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center">
        <div className="adv-search-grp">
          <MetricSlider sliderLabel={"Height"} />
        </div>
        <div className="adv-search-grp">
          <MetricSlider sliderLabel={"Weight"} />
        </div>
      </Box>
    </>
  );
};

export default AdvancedSearch;

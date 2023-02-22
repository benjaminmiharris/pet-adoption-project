import React, { useContext } from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import { useSelector } from "react-redux";
import { showAdvancedSearch } from "../../../../redux/search";

import AdvancedSearch from "../SearchBanner/AdvancedSearch/AdvancedSearch";
import BasicSearch from "../SearchBanner/BasicSearch/BasicSearch";

import SearchToggle from "../../../../components/inputs/SearchToggle";

import "../../search-page.css";
import { PetContext } from "../../../../context/PetContext";

const SearchFilters = () => {
  const state = useSelector(showAdvancedSearch);

  const {
    petType,
    petAdoptionStatus,
    petName,
    petWeight,
    petHeight,
    searchPetObject,
  } = useContext(PetContext);

  // console.log("State IH", state.payload.search.value);
  return (
    <>
      <div className="search-headers-container">
        <div className="second-header ">Search Page</div>
        <Box display="flex" alignItems="center" justifyContent="center">
          <SearchToggle />
        </Box>

        {state.payload.search.value ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <BasicSearch />
          </Box>
        ) : (
          <AdvancedSearch />
        )}
        <Box
          sx={{ m: 2 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button variant="outlined" onClick={searchPetObject}>
            Search
          </Button>
        </Box>
      </div>
    </>
  );
};

export default SearchFilters;

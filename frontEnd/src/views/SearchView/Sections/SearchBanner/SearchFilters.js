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
import { getPetsAPI } from "../../../../helpers/createPetAPI";

const SearchFilters = () => {
  const state = useSelector(showAdvancedSearch);

  const {
    petType,
    petAdoptionStatus,
    petName,
    petHeight,
    petWeight,
    setPetResults,
    petsResults,
  } = useContext(PetContext);

  const searchHandler = async () => {
    const data = await getPetsAPI(
      `http://localhost:3002/pet?petType=${petType}&petStatus=${petAdoptionStatus}&petName=${petName}&petHeight=${petHeight}&petWeight=${petWeight}`
    );

    return setPetResults(data);
  };

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
          <Button
            sx={{ backgroundColor: "#FCC1C2", color: "white" }}
            variant="outlined"
            onClick={() => {
              searchHandler();
            }}
          >
            Search
          </Button>
        </Box>
      </div>
    </>
  );
};

export default SearchFilters;

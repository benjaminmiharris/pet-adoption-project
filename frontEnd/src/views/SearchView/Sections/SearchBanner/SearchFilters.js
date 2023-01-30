import React from "react";

import Box from "@mui/material/Box";

import { useSelector } from "react-redux";
import { showAdvancedSearch } from "../../../../redux/search";

import AdvancedSearch from "../SearchBanner/AdvancedSearch/AdvancedSearch";
import BasicSearch from "../SearchBanner/BasicSearch/BasicSearch";

import SearchToggle from "../../../../components/inputs/SearchToggle";

import PetListing from "../../../../components/PetListing";

import "../../search-page.css";

const SearchFilters = () => {
  const state = useSelector(showAdvancedSearch);
  console.log("State IH", state.payload.search.value);
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
      </div>
    </>
  );
};

export default SearchFilters;

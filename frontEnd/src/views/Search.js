import React from "react";

import Box from "@mui/material/Box";

import AdvancedSearch from "../components/AdvancedSearch";
import "../style/search-page.css";
import SearchToggle from "../components/inputs/SearchToggle";
import BasicSearch from "../components/BasicSearch";
import PetListing from "../components/PetListing";

import { useSelector } from "react-redux";
import { showAdvancedSearch } from "../redux/search";

const Search = () => {
  const state = useSelector(showAdvancedSearch);
  console.log("State IH", state.payload.search.value);

  return (
    <div>
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

      <div className="search-results-container">
        <h4 className="search-results-null">
          No pets to show at the moment...
        </h4>
        {/* <PetListing
          imageSrc={
            "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
          }
          petName={"Charlie"}
          petStatus={"Foster"}
        /> */}
      </div>
    </div>
  );
};

export default Search;

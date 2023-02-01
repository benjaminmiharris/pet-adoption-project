import React, { useState } from "react";

import SearchToggle from "../../components/inputs/SearchToggle";

// import MyPetsResults from "./Sections/Results/MyPetsResults";

import { showAdvancedSearch } from "../../redux/search";

import { useSelector } from "react-redux";

import "./my-pets-view.css";

const MyPets = () => {
  const state = useSelector(showAdvancedSearch);
  console.log("State IH", state.payload.search.value);

  return (
    <div className="my-pets-container">
      <div className="dashboard-side-container my-pets"></div>
      <div className="my-pets-main-container">
        <div className="my-pets-header-container">
          {state.payload.search.value ? <h2>Saved Pets</h2> : <h2>My Pets</h2>}
        </div>
        <div className="my-pets-form-container">
          <SearchToggle />
        </div>
        <div className="my-pets-results-container">
          {state.payload.search.value ? (
            <h3 className="my-pets-search-type-header">Saved Pets Listings</h3>
          ) : (
            <h3 className="my-pets-search-type-header">My Pets Listing</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPets;

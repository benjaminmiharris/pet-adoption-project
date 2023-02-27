import React, { useContext, useEffect } from "react";

import SearchToggle from "../../components/inputs/SearchToggle";

import MySavedPets from "./Sections/Results/MySavedPets";

import { showAdvancedSearch } from "../../redux/search";

import { useSelector } from "react-redux";

import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";

import "./my-pets-view.css";

const MyPets = () => {
  const state = useSelector(showAdvancedSearch);
  const { authToken } = useContext(AuthContext);
  const { setProfileState, userSavedPets } = useContext(UserContext);

  const getProfileData = async () => {
    try {
      if (authToken) {
        await setProfileState();
      }
    } catch (error) {
      console.log(`There was an error getting user profile - ${error}`);
    }
  };

  useEffect(() => {
    getProfileData();
  }, [authToken]);

  return (
    <div className="my-pets-container">
      <div className="profile-main-container">
        <div className="my-pets-header-container">
          {state.payload.search.value ? <h2>Saved Pets</h2> : <h2>My Pets</h2>}
        </div>
        <div className="my-pets-toggle-container">
          <SearchToggle />
        </div>
        <div className="my-pets-results-container">
          {state.payload.search.value ? (
            <MySavedPets userSavedPets={userSavedPets} />
          ) : (
            <>
              <h3 className="my-pets-search-type-header">No Pets!</h3>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPets;

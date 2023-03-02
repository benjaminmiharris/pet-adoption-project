import React, { useContext, useEffect, useState } from "react";

import SearchToggle from "../../components/inputs/SearchToggle";

import MySavedPets from "./Sections/Results/MySavedPets";
import MyPetsResults from "./Sections/Results/MyPets";

import { showAdvancedSearch } from "../../redux/search";

import { useSelector } from "react-redux";

import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";

import "./my-pets-view.css";
import { getMyPetsAPI } from "../../helpers/createPetAPI";

const MyPets = () => {
  const state = useSelector(showAdvancedSearch);
  const { authToken } = useContext(AuthContext);
  const { setProfileState, userSavedPets } = useContext(UserContext);

  const [myPetsResult, setMyPetsResults] = useState([]);

  const getProfileData = async () => {
    try {
      if (authToken) {
        await setProfileState();
      }
    } catch (error) {
      console.log(`There was an error getting user profile - ${error}`);
    }
  };

  const setMyPetsFromAPI = async () => {
    const myPetsFromAPI = await getMyPetsAPI(authToken);
    setMyPetsResults(myPetsFromAPI);
  };
  useEffect(() => {
    getProfileData();
    setMyPetsFromAPI();
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
            myPetsResult && <MyPetsResults myPetsResult={myPetsResult} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPets;

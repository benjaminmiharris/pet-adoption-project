import React, { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import { UserContext } from "../../../../context/UserContext";
import { savePetToMyPetsAPI } from "../../../../helpers/createPetAPI";

import "./_home-banner.css";

const HomeBanner = ({ petDetails }) => {
  const [heartStateCSS, setHeartStateCSS] = useState(true);

  let { id } = useParams();

  const { authToken } = useContext(AuthContext);

  const { setProfileState, userSavedPets } = useContext(UserContext);

  const getProfileData = async () => {
    try {
      if (authToken) {
        await setProfileState();
        console.log(userSavedPets);
      }
    } catch (error) {
      console.log(`There was an error getting user profile - ${error}`);
    }
  };

  const checkIfPetIsSaved = () => {
    console.log("userSavedPets", userSavedPets);
    const petExists = userSavedPets.some((pet) => pet._id === id);
    console.log("petExists", petExists);

    if (petExists) {
      setHeartStateCSS(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, [authToken]);

  useEffect(() => {
    checkIfPetIsSaved();
  }, [userSavedPets]);

  const savePetHandler = () => {
    setHeartStateCSS(!heartStateCSS);
    savePetToMyPetsAPI(authToken, id);
    console.log("clicked");
  };

  return (
    <div className="pet-header-container">
      <div className="pet-container">
        <img className="pet-container-img" src={petDetails.petImage} />
      </div>
      <div className="pet-cover">
        <img className="pet-img" src={petDetails.petImage} />

        {heartStateCSS ? (
          <FaHeart
            className={"pet-heart-icon"}
            size={35}
            onClick={() => {
              savePetHandler();
            }}
          />
        ) : (
          <FaHeart
            className={"pet-heart-icon clicked"}
            size={35}
            onClick={() => {
              savePetHandler();
            }}
          />
        )}
      </div>
      <div className="pet-actions">
        <div className="pet-actions-left">
          <div className="pet-info-box">
            <div className="pet-details-label">Age</div>
            <div className="pet-details-values">
              {!petDetails.pet_age ? "NA" : petDetails.pet_age}
            </div>
          </div>
        </div>
        <div className="pet-actions-center">
          <div className="pet-info-box">
            <div className="pet-details-label">Weight (kg)</div>
            <div className="pet-details-values">
              {" "}
              {!petDetails.pet_weight ? "NA" : petDetails.pet_weight}
            </div>
          </div>
        </div>
        <div className="pet-actions-right">
          <div className="pet-info-box">
            <div className="pet-details-label">Sex</div>
            <div className="pet-details-values">
              {" "}
              {!petDetails.pet_gender ? "NA" : petDetails.pet_gender}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

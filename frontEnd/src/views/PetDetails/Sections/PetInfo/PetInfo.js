import React, { useContext, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./pet-info.css";
import { AuthContext } from "../../../../context/AuthContext";
import { adoptOrFosterPetAPI } from "../../../../helpers/createPetAPI";
import { useParams } from "react-router-dom";
import { LoginModalContext } from "../../../../context/LoginModalContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../../context/UserContext";

const PetInfo = ({ petDetails }) => {
  const { authToken } = useContext(AuthContext);
  const { setModalShow } = useContext(LoginModalContext);
  const { setProfileState, userMyPets } = useContext(UserContext);

  let { id } = useParams();

  const getProfileData = async () => {
    try {
      if (authToken) {
        await setProfileState();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfCurrentPetIsUsersPet = () => {
    const arr = userMyPets;
    const valueToFind = id;

    if (arr.includes(valueToFind)) {
      console.log("Value found in array!");
      return (
        <Button
          color="secondary"
          onClick={
            authToken ? () => returnClickHandler() : () => setModalShow(true)
          }
        >
          Return Pet
        </Button>
      );
    }
  };

  useEffect(() => {
    getProfileData();
  }, [authToken]);

  useEffect(() => {
    checkIfCurrentPetIsUsersPet();
  }, [userMyPets]);

  const adoptClickHandler = async () => {
    const status = { status: "Adopted" };
    const response = await adoptOrFosterPetAPI(authToken, id, status);
    notify(response);
  };

  const fosterClickHandler = async () => {
    const status = { status: "Foster" };
    const response = await adoptOrFosterPetAPI(authToken, id, status);
    notify(response);
  };

  const returnClickHandler = async () => {
    const status = { status: "Looking for home" };
    const response = await adoptOrFosterPetAPI(authToken, id, status);
    notify(response);
  };

  const notify = async (message) => await toast(message);

  console.log("my pets", userMyPets);

  return (
    <div className="pet-details-container">
      <div className="pet-details-bio">
        <div className="pet-buttons-stack">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Button
              color="secondary"
              onClick={
                authToken ? () => adoptClickHandler() : () => setModalShow(true)
              }
            >
              Adopt
            </Button>
            <Button
              color="secondary"
              onClick={
                authToken
                  ? () => fosterClickHandler()
                  : () => setModalShow(true)
              }
            >
              Foster
            </Button>
            {checkIfCurrentPetIsUsersPet()}
          </Stack>
        </div>
        <br />
        <div className="pets-bio-container">
          {!petDetails.pet_bio
            ? "There is no bio for this pet!"
            : petDetails.pet_bio}
        </div>
      </div>

      <div className="pet-details-more-info-container">
        <div className="pet-details-more-info-title">Further details:</div>
        <ul className="pet-details-more-info">
          <li className="pet-details-more-info-detail">
            Name: {!petDetails.pet_name ? "NA" : petDetails.pet_name}{" "}
          </li>

          <li className="pet-details-more-info-detail">
            Breed: {!petDetails.pet_breed ? "NA" : petDetails.pet_breed}{" "}
          </li>
          <li className="pet-details-more-info-detail">
            Type: {!petDetails.pet_type ? "NA" : petDetails.pet_type}
          </li>
          <li className="pet-details-more-info-detail">
            Adoption Status:{" "}
            {!petDetails.pet_adoptionStatus
              ? "NA"
              : petDetails.pet_adoptionStatus}
          </li>
          <li className="pet-details-more-info-detail">
            Height (cm): {!petDetails.pet_height ? "NA" : petDetails.pet_height}
          </li>
          <li className="pet-details-more-info-detail">
            Color: {!petDetails.pet_color ? "NA" : petDetails.pet_color}
          </li>
          <li className="pet-details-more-info-detail">
            Hyperallergenic: {!petDetails.pet_hypoallergenic ? "NA" : "Yes"}
          </li>
          <li className="pet-details-more-info-detail">
            Dietary restrictions:{" "}
            {!petDetails.pet_dietary ? "NA" : petDetails.pet_dietary}
          </li>
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PetInfo;

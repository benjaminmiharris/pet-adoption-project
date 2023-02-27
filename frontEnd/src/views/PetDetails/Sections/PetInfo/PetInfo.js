import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./pet-info.css";
import { AuthContext } from "../../../../context/AuthContext";
import { adoptOrFosterPetAPI } from "../../../../helpers/createPetAPI";
import { useParams } from "react-router-dom";

const PetInfo = ({ petDetails }) => {
  const { authToken } = useContext(AuthContext);

  let { id } = useParams();

  const adoptClickHandler = () => {
    const status = { status: "Adopted" };
    adoptOrFosterPetAPI(authToken, id, status);
  };

  const fosterClickHandler = () => {
    const status = { status: "Foster" };
    adoptOrFosterPetAPI(authToken, id, status);
  };

  const returnClickHandler = () => {
    const status = { status: "Looking for home" };
    adoptOrFosterPetAPI(authToken, id, status);
  };
  return (
    <div>
      <div className="pet-details-container">
        <div className="pet-details-bio">
          <div className="pet-buttons-stack">
            <Stack direction="row" spacing={2}>
              <Button
                color="secondary"
                onClick={() => {
                  adoptClickHandler();
                }}
              >
                Adopt
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  fosterClickHandler();
                }}
              >
                Foster
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  returnClickHandler();
                }}
              >
                Return Pet
              </Button>
            </Stack>
          </div>
          <br />
          <div>
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
              Height (cm):{" "}
              {!petDetails.pet_height ? "NA" : petDetails.pet_height}
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
      </div>
    </div>
  );
};

export default PetInfo;

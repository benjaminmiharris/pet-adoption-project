import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./pet-info.css";

const PetInfo = ({ petDetails }) => {
  return (
    <div>
      <div className="pet-details-container">
        <div className="pet-details-bio">
          <div className="pet-buttons-stack">
            <Stack direction="row" spacing={2}>
              <Button color="secondary">Adopt</Button>
              <Button color="secondary">Foster</Button>
              <Button color="secondary">Return Pet</Button>
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

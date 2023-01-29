import React from "react";

import "./pet-info.css";

const PetInfo = () => {
  return (
    <div>
      <div className="pet-details-container">
        <div className="pet-details-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>

        <div className="pet-details-more-info-container">
          <div className="pet-details-more-info-title">Further details:</div>
          <ul className="pet-details-more-info">
            <li className="pet-details-more-info-detail">Breed: </li>
            <li className="pet-details-more-info-detail">Type: </li>
            <li className="pet-details-more-info-detail">Adoption Status: </li>
            <li className="pet-details-more-info-detail">Height: </li>
            <li className="pet-details-more-info-detail">Color: </li>
            <li className="pet-details-more-info-detail">Hyperallergenic: </li>
            <li className="pet-details-more-info-detail">
              Dietary restrictions:
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PetInfo;

import React, { useState } from "react";
import "../style/pet-listing.css";

const PetListing = ({ imageSrc, petName, petStatus }) => {
  const [buttonText, setButtonText] = useState(petName);
  return (
    <div className="pet-card">
      <img className="pet-listing-container" src={imageSrc} />
      <div
        className="pet-name-container"
        onMouseEnter={() => setButtonText("More info")}
        onMouseLeave={() => setButtonText(petName)}
        onClick={() => {
          console.log("Mload");
        }}
      >
        <p className="pet-name-txt">{buttonText}</p>
      </div>
      <div className="pet-status-container">
        <p className="pet-status-txt">{petStatus}</p>
      </div>
    </div>
  );
};

export default PetListing;

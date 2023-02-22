import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./pet-listing.css";

const PetListing = ({ imageSrc, petName, petStatus, petId }) => {
  const [buttonText, setButtonText] = useState(petName);
  const navigate = useNavigate();

  return (
    <div className="pet-card">
      <img className="pet-listing-container" src={imageSrc} />
      <div
        className="pet-name-container"
        onMouseEnter={() => setButtonText("More info")}
        onMouseLeave={() => setButtonText(petName)}
        onClick={() => {
          navigate(`/pet/${petId}`);
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

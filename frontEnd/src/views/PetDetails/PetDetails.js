import React from "react";
import HomeBanner from "./Sections/PetBanner/HomeBanner";
import "./pet-details.css";
import PetInfo from "./Sections/PetInfo/PetInfo";

const PetDetails = () => {
  return (
    <div className="page">
      <HomeBanner />
      <PetInfo />
    </div>
  );
};

export default PetDetails;

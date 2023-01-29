import React from "react";
import { FaHeart } from "react-icons/fa";

import "./_home-banner.css";

const HomeBanner = () => {
  return (
    <div className="header-container">
      <div className="pet-container">
        <img
          className="pet-container-img"
          src="https://pet-adoption-project.s3.eu-west-2.amazonaws.com/1600+x+840+Web+Banners+(3200+x+1680+px)+(4).png"
        />
      </div>

      <div className="pet-cover">
        <img
          className="pet-img"
          src="https://pet-adoption-project.s3.eu-west-2.amazonaws.com/1600+x+840+Web+Banners+(3200+x+1680+px)+(2).png"
        />

        <div className="pet-actions">
          <div className="pet-actions-left">
            <div className="pet-info-box">
              <div className="pet-details-label">Age</div>
              <div className="pet-details-values">3 months</div>
            </div>
          </div>
          <div className="pet-actions-center">
            <div className="pet-info-box">
              <div className="pet-details-label">Weight</div>
              <div className="pet-details-values">2 kg</div>
            </div>
          </div>
          <div className="pet-actions-right">
            <div className="pet-info-box">
              <div className="pet-details-label">Sex</div>
              <div className="pet-details-values">Male</div>
            </div>
          </div>
        </div>
        <FaHeart className="pet-heart-icon" size={35} />
      </div>
    </div>
  );
};

export default HomeBanner;

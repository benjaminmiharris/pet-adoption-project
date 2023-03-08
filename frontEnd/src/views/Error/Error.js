import React, { useEffect } from "react";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import "./error.css";

const Error = () => {
  return (
    <>
      <div className="error-container">
        <div className="left error-int">4</div>
        <img
          className="not-found-image"
          src="https://pet-adoption-project.s3.eu-west-2.amazonaws.com/New+Staff+Headshots+(6).png"
          alt="img of pug in pink circle"
        />
        <div className="right error-int">4</div>
      </div>
      <div className="error-sub-message">
        Oops... Lets get you back to meeting pets!
      </div>
      <div className="rtrn-home-btn">
        <Link to="/">
          <Button size="large" color="secondary">
            HOME
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Error;

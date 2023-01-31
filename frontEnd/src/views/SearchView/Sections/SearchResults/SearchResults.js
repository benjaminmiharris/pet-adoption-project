import React from "react";
import PetListing from "../../../../components/petCard/PetListing";

import "./search-results.css";

const SearchResults = () => {
  return (
    <>
      <div className="search-results-container">
        {/* <h4 className="search-results-null">
          No pets to show at the moment...
        </h4> */}
        <div className="pet-listing-container-search-results">
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
        </div>
      </div>
    </>
  );
};

export default SearchResults;

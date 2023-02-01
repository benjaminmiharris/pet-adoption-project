import React from "react";
import PetListing from "../../../../components/petCard/PetListing";

const MyPetsResults = () => {
  return (
    <div>
      <PetListing
        imageSrc={
          "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
        }
        petName={"Charlie"}
        petStatus={"Adopted"}
      />
      <PetListing
        imageSrc={
          "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
        }
        petName={"Charlie"}
        petStatus={"Adopted"}
      />
      <PetListing
        imageSrc={
          "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
        }
        petName={"Charlie"}
        petStatus={"Adopted"}
      />
    </div>
  );
};

export default MyPetsResults;

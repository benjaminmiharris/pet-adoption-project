import React from "react";
import PetListing from "../../../../components/petCard/PetListing";

const MySavedPets = ({ userSavedPets }) => {
  return (
    <>
      {userSavedPets.map((pet) => {
        return (
          <PetListing
            key={pet._id}
            imageSrc={pet.petImage}
            petName={pet.pet_name}
            petStatus={pet.pet_adoptionStatus}
            petId={pet._id}
          />
        );
      })}
    </>
  );
};

export default MySavedPets;

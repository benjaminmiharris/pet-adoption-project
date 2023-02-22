import React, { useContext, useEffect, useState } from "react";
import { GrMoreVertical } from "react-icons/gr";
import PetListing from "../../../../components/petCard/PetListing";
import { PetContext } from "../../../../context/PetContext";
import { getPetsAPI } from "../../../../helpers/createPetAPI";

import "./search-results.css";

const SearchResults = () => {
  const { setPetResults, petsResults } = useContext(PetContext);

  async function getPetResultsFromPetsAPI() {
    const data = await getPetsAPI("http://localhost:3002/pet");
    setPetResults(data);
  }

  useEffect(() => {
    getPetResultsFromPetsAPI();
  }, []);

  return (
    <>
      <div className="search-results-container">
        {/* <h4 className="search-results-null">
          No pets to show at the moment...
        </h4> */}
        <div className="pet-listing-container-search-results">
          {petsResults.response &&
            petsResults.response.results.map((pet) => {
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
        </div>
      </div>
    </>
  );
};

export default SearchResults;

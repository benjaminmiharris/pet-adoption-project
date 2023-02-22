import React, { useContext, useEffect, useState } from "react";
import { GrMoreVertical } from "react-icons/gr";
import PetListing from "../../../../components/petCard/PetListing";
import { PetContext } from "../../../../context/PetContext";
import { getPetsAPI } from "../../../../helpers/createPetAPI";

import "./search-results.css";

const SearchResults = () => {
  const [petsResults, setPetResults] = useState([]);

  async function getPetResultsFromPetsAPI() {
    const data = await getPetsAPI();
    setPetResults(data);
  }

  useEffect(() => {
    getPetResultsFromPetsAPI();
  }, []);

  console.log(petsResults);

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
                  petName={"Charlie"}
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

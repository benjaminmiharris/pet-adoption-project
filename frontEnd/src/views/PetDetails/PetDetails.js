import React, { useEffect, useState } from "react";
import HomeBanner from "./Sections/PetBanner/HomeBanner";
import "./pet-details.css";
import PetInfo from "./Sections/PetInfo/PetInfo";

import { useParams } from "react-router-dom";
import { getPetIdAPI } from "../../helpers/createPetAPI";

const PetDetails = () => {
  const [petDetails, setPetDetails] = useState([]);
  const { id } = useParams(); // extract the id parameter from the URL

  async function getPetResultsFromPetsAPI() {
    const data = await getPetIdAPI(id);
    setPetDetails(data.results.message);
  }

  useEffect(() => {
    getPetResultsFromPetsAPI();
  }, []);

  console.log("pee", petDetails);

  return (
    <div className="page">
      <HomeBanner petDetails={petDetails} />
      <PetInfo petDetails={petDetails} />
    </div>
  );
};

export default PetDetails;

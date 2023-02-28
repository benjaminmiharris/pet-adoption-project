import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TableComponent from "../../components/TableComponent";
import { getPetsAPI } from "../../helpers/createPetAPI";
import "./all-pets.css";

const AllPets = () => {
  const [allPets, setAllPets] = useState([]);

  const navPetLandingPage = useNavigate();

  const getAllPetsHandler = async () => {
    const petsArray = await getPetsAPI("http://localhost:3002/pet");
    setAllPets(petsArray.response.results);
  };

  useEffect(() => {
    getAllPetsHandler();
  }, []);

  const columns = [
    {
      name: "Pet Name",
      selector: (row) => row.petName,
    },
    {
      name: "Edit",
      selector: (row) => row.edit,
    },
  ];

  const petArrayWithEditButton = allPets.map((pets) => {
    return {
      petName: pets.pet_name,
      edit: (
        <Button onClick={() => navPetLandingPage(`/create-pet/${pets._id}`)}>
          Edit
        </Button>
      ),
    };
  });
  return (
    <div className="my-pets-container">
      <div className="profile-main-container">
        <div className="my-saved-pets-header-container">
          <h2 className="saved-pets-header">All Pets</h2>
          <div className="saved-pets-container">
            <TableComponent columns={columns} data={petArrayWithEditButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPets;

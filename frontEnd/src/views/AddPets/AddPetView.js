import React from "react";

import "./add-pet-view.css";
import AddPetForm from "./AddPetForm/AddPetForm";

const AddPetView = () => {
  return (
    <div className="my-pets-main-container">
      <div className="my-pets-header-container">
        <h2>Add a Pet</h2>
      </div>
      <div className="my-pets-form-container">
        <AddPetForm />
      </div>
    </div>
  );
};

export default AddPetView;

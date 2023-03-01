import { createContext, useContext, useEffect, useState } from "react";
import {
  createPetAPI,
  getPetsAPI,
  updatePetObjectAPI,
} from "../helpers/createPetAPI";
import { AuthContext } from "./AuthContext";

const PetContext = createContext();

const PetContextProvider = ({ children }) => {
  const { authToken } = useContext(AuthContext);

  const [petType, setPetType] = useState("");
  const [petName, setPetName] = useState("");

  const [petAge, setPetAge] = useState("");
  const [petGender, setPetGender] = useState("");

  const [petAdoptionStatus, setpetAdoptionStatus] = useState("");
  const [petHeight, setPetHeight] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petColor, setPetColor] = useState("");
  const [petBio, setPetBio] = useState("");
  const [petHypoallergenic, setPetHypoallergenic] = useState(false);
  const [petDiet, setPetDiet] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petImage, setpetImage] = useState([]);
  const [petsResults, setPetResults] = useState([]);

  const createPetObject = () => {
    const petObject = {
      pet_type: petType,
      pet_name: petName,
      pet_age: petAge,
      pet_gender: petGender,
      pet_adoptionStatus: petAdoptionStatus,
      pet_height: petHeight,
      pet_weight: petWeight,
      pet_color: petColor,
      pet_bio: petBio,
      pet_hypoallergenic: petHypoallergenic,
      pet_dietary: petDiet,
      pet_breed: petBreed,
    };

    console.log("AUTHTOEKN", authToken);

    createPetAPI(authToken, petImage, petObject);
  };

  const updatePetObject = (id) => {
    const petObject = {
      pet_type: petType,
      pet_name: petName,
      pet_age: petAge,
      pet_gender: petGender,
      pet_adoptionStatus: petAdoptionStatus,
      pet_height: petHeight,
      pet_weight: petWeight,
      pet_color: petColor,
      pet_bio: petBio,
      pet_hypoallergenic: petHypoallergenic,
      pet_dietary: petDiet,
      pet_breed: petBreed,
      petImage: petImage,
    };

    console.log("petObject", petObject);
    console.log("petObjectId", id);

    updatePetObjectAPI(authToken, petObject, id);
  };
  return (
    <PetContext.Provider
      value={{
        updatePetObject,
        petsResults,
        setPetResults,
        petAge,
        setPetAge,
        petGender,
        setPetGender,
        createPetObject,
        petType,
        setPetType,
        petName,
        setPetName,
        petAdoptionStatus,
        setpetAdoptionStatus,
        petHeight,
        setPetHeight,
        petWeight,
        setPetWeight,
        petColor,
        setPetColor,
        petBio,
        setPetBio,
        petHypoallergenic,
        setPetHypoallergenic,
        petDiet,
        setPetDiet,
        petBreed,
        setPetBreed,
        petImage,
        setpetImage,
        petsResults,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export { PetContext, PetContextProvider };

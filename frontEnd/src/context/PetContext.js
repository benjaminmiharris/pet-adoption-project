import { createContext, useState } from "react";
import { createPetAPI } from "../helpers/createPetAPI";
const PetContext = createContext();

const PetContextProvider = ({ children }) => {
  const [petType, setPetType] = useState("");

  const [petName, setPetName] = useState("");
  const [petAdoptionStatus, setpetAdoptionStatus] = useState("");
  const [petHeight, setPetHeight] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petColor, setPetColor] = useState("");
  const [petBio, setPetBio] = useState("");
  const [petHypoallergenic, setPetHypoallergenic] = useState(false);
  const [petDiet, setPetDiet] = useState("");
  const [petBreed, setPetBreed] = useState("");

  const createPetObject = () => {
    const petObject = {
      petAdoptionStatus,
      petType,
      petName,
      petHeight,
      petWeight,
      petColor,
      petBio,
      petHypoallergenic,
      petDiet,
      petBreed,
    };

    createPetAPI(petObject);
  };

  return (
    <PetContext.Provider
      value={{
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
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export { PetContext, PetContextProvider };

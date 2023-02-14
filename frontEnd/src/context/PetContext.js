import { createContext, useContext, useState } from "react";
import { createPetAPI } from "../helpers/createPetAPI";
import { AuthContext } from "./AuthContext";

const PetContext = createContext();

const PetContextProvider = ({ children }) => {
  const { authToken } = useContext(AuthContext);

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
  const [petImage, setpetImage] = useState([]);

  const createPetObject = () => {
    const petObject = {
      pet_type: petType,
      pet_name: petName,
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
        petImage,
        setpetImage,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export { PetContext, PetContextProvider };

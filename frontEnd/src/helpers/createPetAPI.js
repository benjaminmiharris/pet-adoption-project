import axios from "axios";

const createPetAPI = async (token, img, pet) => {
  try {
    console.log("IMG", img);

    console.log("TOKEN", token);
    console.log("PET", pet);

    const formData = new FormData();
    formData.append("text", JSON.stringify(pet));
    formData.append("image", img);

    console.log("formData", formData);

    const response = await axios.post(
      "http://localhost:3002/pet/create",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      return console.log("A new pet has been succesfully created");
    }
    if (response.status == 400) {
      return console.log("Return the response body from the API...");
    }
  } catch (e) {
    console.log(e);
  }
};

const getPetsAPI = async (url) => {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log("API", results);

    if (results.results.length > 0) {
      return {
        success: true,
        response: results,
      };
    } else {
      return { success: false, message: "There is no data" };
    }
  } catch (error) {
    return {
      success: false,
      message: "There was an error when requesting pets data",
    };
  }
};

const getPetIdAPI = async (id) => {
  try {
    const response = await fetch(`http://localhost:3002/pet/${id}`);
    const results = await response.json();

    console.log("API", results);

    if (results.success == true) {
      return {
        results,
      };
    } else {
      return { success: false, message: "There is no data" };
    }
  } catch (error) {
    return {
      success: false,
      message: "There was an error when requesting pets data",
    };
  }
};

const savePetToMyPetsAPI = async (token, petId) => {
  try {
    const response = await fetch(`http://localhost:3002/pet/${petId}/save`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      return console.log("Pet has been saved or deleted");
    }
    if (response.status == 400) {
      return console.log("Return the response body from the API...");
    }
  } catch (e) {
    console.log(e);
  }
};

export { createPetAPI, getPetsAPI, getPetIdAPI, savePetToMyPetsAPI };

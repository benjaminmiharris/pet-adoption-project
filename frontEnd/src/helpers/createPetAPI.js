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

export { createPetAPI };

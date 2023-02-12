import axios from "axios";

const createPetAPI = async (token, img, pet) => {
  try {
    console.log("IMG", img);

    console.log("TOKEN", token);
    console.log("PET", pet);

    const formData = new FormData();
    formData.append("text", pet);
    formData.append("image", img);

    const response = await axios.post(
      "http://localhost:3002/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // const response = await fetch("http://localhost:3002/upload", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "multipart/form-data",
    //     // Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(formData),
    // });

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

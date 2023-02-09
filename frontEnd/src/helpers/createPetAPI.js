const createPetAPI = async (pet) => {
  try {
    const response = await fetch("http://localhost:3002/create-pet", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    });
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

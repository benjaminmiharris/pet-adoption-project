export const createAccountAPI = async (user) => {
  try {
    const response = await fetch("http://localhost:3002/create-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      return console.log("DATA SENT");
    }
  } catch (e) {
    console.log(e);
  }
};

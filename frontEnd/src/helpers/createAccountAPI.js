const createAccountAPI = async (user) => {
  try {
    const response = await fetch("http://localhost:3002/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      return console.log("A new account has been succesfully created");
    }
    if (response.status == 400) {
      return console.log("Return the response body from the API...");
    }
  } catch (e) {
    console.log(e);
  }
};

const loginAPI = async (user) => {
  try {
    const response = await fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const results = await response.json();
      return setUserTokenLocalStorage(results.token);
    }
    if (response.status == 400) {
      return console.log("Return the response body from the API...");
    }
  } catch (error) {
    console.log(error);
  }
};

const setUserTokenLocalStorage = (token) => {
  localStorage.setItem("userToken", token);
  console.log("Token added to localStorage");
};

export { createAccountAPI, loginAPI };

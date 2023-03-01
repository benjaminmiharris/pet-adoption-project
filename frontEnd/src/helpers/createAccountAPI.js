const createAccountAPI = async (user) => {
  let outcome;
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
      console.log(response.status);
      return response.status;
    }
    if (response.status == 400) {
      console.log(response.status);

      return response.status;
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

const updateUserAPI = async (userId, userObject) => {
  try {
    await fetch(`http://localhost:3002/user/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    });
  } catch (error) {
    console.log(error);
  }
};

const setUserTokenLocalStorage = (token) => {
  localStorage.setItem("userToken", token);
  console.log("Token added to localStorage");
};

const getCurrentUserProfileAPI = async (token) => {
  try {
    const settings = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch("http://localhost:3002/user", settings);
    const result = await response.json();

    console.log("User", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// const authenticateUser = async (token) => {
//   try {
//     const response = await axios.post("http://localhost:3002/verify", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (response.ok) {
//       console.log("all good");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export { createAccountAPI, loginAPI, getCurrentUserProfileAPI, updateUserAPI };

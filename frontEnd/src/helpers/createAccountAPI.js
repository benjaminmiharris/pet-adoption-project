const createAccountAPI = async (user) => {
  try {
    const response = await fetch(
      "https://pet-server-nodejs.herokuapp.com/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const result = await response.json();
    if (response.ok) {
      return result;
    }
    if (response.status === 400) {
      console.log(result);

      return result;
    }
  } catch (e) {
    console.log(e);
  }
};

const loginAPI = async (user) => {
  console.log("user", user);
  try {
    const response = await fetch(
      "https://pet-server-nodejs.herokuapp.com/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const results = await response.json();

    if (response.status === 200) {
      setUserTokenLocalStorage(results.token);

      return results;
    }
    if (response.status === 400) {
      return results;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUserAPI = async (userId, userObject, token) => {
  try {
    const response = await fetch(
      `https://pet-server-nodejs.herokuapp.com/user/${userId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userObject),
      }
    );

    const results = await response.json();

    if (response.status === 200) {
      return results;
    }
    if (response.status === 400) {
      return results;
    }
  } catch (error) {
    console.log(error);
  }
};

const setUserTokenLocalStorage = (token) => {
  localStorage.setItem("userToken", token);
};

const getCurrentUserProfileAPI = async (token) => {
  try {
    const settings = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(
      "https://pet-server-nodejs.herokuapp.com/user",
      settings
    );
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsersAPI = async (token) => {
  try {
    const settings = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(
      "https://pet-server-nodejs.herokuapp.com/users",
      settings
    );
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export {
  createAccountAPI,
  loginAPI,
  getCurrentUserProfileAPI,
  updateUserAPI,
  getAllUsersAPI,
};

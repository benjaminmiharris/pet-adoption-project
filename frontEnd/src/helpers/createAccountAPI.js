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
  try {
    const response = await fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

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
    const response = await fetch(`http://localhost:3002/user/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userObject),
    });

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

    const response = await fetch("http://localhost:3002/user", settings);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export { createAccountAPI, loginAPI, getCurrentUserProfileAPI, updateUserAPI };

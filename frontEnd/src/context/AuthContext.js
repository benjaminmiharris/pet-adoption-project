import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { authenticateUser } from "../helpers/createAccountAPI";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authToken, setauthToken] = useState("");
  //   const [validUser, setValidUser] = useState(false);

  async function getFromStorage() {
    const creds = await localStorage.getItem("userToken");
    console.log("creds", creds);
    // authenticateUser(creds);
    // creds = JSON.stringify(creds);

    if (creds) {
      setauthToken(creds);
    }
  }

  function logoutStorage() {
    localStorage.removeItem("userToken");
  }

  useEffect(() => {
    getFromStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, setauthToken, logoutStorage }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };

import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authToken, setauthToken] = useState("");

  async function getFromStorage() {
    const creds = await localStorage.getItem("userToken");

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

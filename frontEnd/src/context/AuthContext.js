import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authToken, setauthToken] = useState("");
  //   const [authName, setAuthName] = useState("");

  async function getFromStorage() {
    const creds = await localStorage.getItem("userToken");
    // creds = JSON.stringify(creds);

    if (creds) {
      setauthToken(creds);
    }
  }

  useEffect(() => {
    getFromStorage();
  }, []);

  //   useEffect(() => {
  //     localStorage.setItem("userToken", {
  //       userToken: authToken,
  //     });
  //   }, [authToken]);

  console.log("authToken", authToken);

  return (
    <AuthContext.Provider value={{ authToken, setauthToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };

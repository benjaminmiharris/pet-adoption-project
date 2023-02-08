import { createContext, useState } from "react";
import { createAccountAPI, loginAPI } from "../helpers/createAccountAPI";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userShortBio, setUserShortBio] = useState("");

  const createUserAccount = () => {
    const userDetails = {
      firstName: userFirstName,
      lastName: userLastName,
      mobile: userMobile,
      email: userEmail,
      password: userPassword,
    };
    createAccountAPI(userDetails);
  };

  const signIn = () => {
    const user = {
      email: userEmail,
      password: userPassword,
    };
    loginAPI(user);
  };

  return (
    <UserContext.Provider
      value={{
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        userPasswordConfirm,
        setUserPasswordConfirm,
        userFirstName,
        setUserFirstName,
        userLastName,
        setUserLastName,
        userMobile,
        setUserMobile,
        userShortBio,
        setUserShortBio,
        createUserAccount,
        signIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

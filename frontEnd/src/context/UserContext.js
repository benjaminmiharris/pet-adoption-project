import { createContext, useState } from "react";
import { createAccountAPI } from "../helpers/createAccountAPI";

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
      firstname: userFirstName,
      lastname: userLastName,
      email: userEmail,
      mobile: userMobile,
      password: userPassword,
    };
    createAccountAPI(userDetails);
    return console.log("create user function successful", userDetails);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

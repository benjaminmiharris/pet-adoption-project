import { createContext, useContext, useState } from "react";
import {
  createAccountAPI,
  getCurrentUserProfileAPI,
  loginAPI,
  updateUserAPI,
} from "../helpers/createAccountAPI";
import { AuthContext } from "./AuthContext";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userShortBio, setUserShortBio] = useState("");
  const [userSavedPets, setUserSavedPets] = useState([]);
  const [userRole, setUserRole] = useState("");

  const setProfileState = async () => {
    try {
      if (authToken) {
        const userProfileData = await getCurrentUserProfileAPI(authToken);
        setUserEmail(userProfileData.user.email);
        setUserFirstName(userProfileData.user.firstName);
        setUserLastName(userProfileData.user.lastName);
        setUserMobile(userProfileData.user.mobile);
        setUserId(userProfileData.user._id);
        setUserShortBio(userProfileData.user.userBio);
        setUserSavedPets(userProfileData.user.savedPets);
        setUserRole(userProfileData.user.role);
      }
    } catch (error) {
      console.log(`There was an error getting user profile - ${error}`);
    }
  };

  const createUserAccount = async () => {
    const userDetails = {
      firstName: userFirstName,
      lastName: userLastName,
      mobile: userMobile,
      email: userEmail,
      password: userPassword,
    };

    const result = await createAccountAPI(userDetails);

    return result;
  };

  const updateUserProfile = async () => {
    const userDetails = {
      firstName: userFirstName,
      lastName: userLastName,
      mobile: userMobile,
      email: userEmail,
      userBio: userShortBio,
    };

    return await updateUserAPI(userId, userDetails, authToken);
  };

  const signIn = async () => {
    const user = {
      email: userEmail,
      password: userPassword,
    };

    return await loginAPI(user);
  };

  return (
    <UserContext.Provider
      value={{
        userRole,
        setProfileState,
        userSavedPets,
        setUserSavedPets,
        userId,
        setUserId,
        updateUserProfile,
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

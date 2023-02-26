import React, { useContext, useEffect } from "react";
import ProfileForm from "./ProfileForm/ProfileForm";

import "./profile.css";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
  const { authToken } = useContext(AuthContext);

  const { setProfileState } = useContext(UserContext);

  const getProfileData = async () => {
    try {
      if (authToken) {
        await setProfileState();
      }
    } catch (error) {
      console.log(`There was an error getting user profile - ${error}`);
    }
  };

  useEffect(() => {
    getProfileData();
  }, [authToken]);

  return (
    <div className="profile-container">
      <div className="dashboard-side-container"></div>
      <div className="profile-main-container">
        <div className="profile-header-container">
          <h2>My Profile</h2>
        </div>
        <div className="profile-form-container">
          <h4 className="profile-form sub-header">Your Details</h4>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import ProfileForm from "./ProfileForm/ProfileForm";

import { useSelector } from "react-redux";

import "./profile.css";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="profile-container">
      <div className="dashboard-side-container">
        {/* <div className="dashboard-nav-box">
          <ul>
            <li>Profile</li>
          </ul>
        </div> */}
      </div>
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

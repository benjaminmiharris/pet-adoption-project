import * as React from "react";

import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { UserContext } from "../../../context/UserContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./profile-form.css";

const ProfileForm = () => {
  const {
    updateUserProfile,
    userEmail,
    userFirstName,
    userLastName,
    userMobile,
    setUserFirstName,
    setUserEmail,
    setUserLastName,
    setUserMobile,
    userShortBio,
    setUserShortBio,
  } = React.useContext(UserContext);
  const fieldWidth = "30ch";

  const setFirstNameHandler = (e) => {
    setUserFirstName(e.target.value);
  };

  const setLastNameHandler = (e) => {
    setUserLastName(e.target.value);
  };

  const setEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const setMobileHandler = (e) => {
    setUserMobile(e.target.value);
  };

  const setUserBioHandler = (e) => {
    setUserShortBio(e.target.value);
  };

  const updateProfileHandler = async () => {
    const response = await updateUserProfile();
    notify(response.message);
  };

  const notify = async (message) => await toast(message);

  return (
    <form className="profile-form">
      <ToastContainer />

      <Box
        component="form"
        sx={{ display: "flex", flexWrap: "wrap" }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            value={userEmail}
            label="Email"
            onChange={(e) => setEmailHandler(e)}
            id="outlined-start-adornment"
            sx={{ m: 1, width: fieldWidth }}
          />
          <br />

          <TextField
            label="First name"
            value={userFirstName}
            onChange={(e) => setFirstNameHandler(e)}
            sx={{ m: 1, width: fieldWidth }}
          />
          <TextField
            label="Last name"
            value={userLastName}
            onChange={(e) => setLastNameHandler(e)}
            sx={{ m: 1, width: fieldWidth }}
          />
          <br />

          <TextField
            label="Mobile"
            value={userMobile}
            onChange={(e) => setMobileHandler(e)}
            sx={{ m: 1, width: fieldWidth }}
          />
          <br />

          <TextField
            id="outlined-textarea"
            label="Short bio"
            placeholder="Placeholder"
            value={userShortBio}
            multiline
            rows={6}
            onChange={(e) => setUserBioHandler(e)}
            sx={{ m: 1, width: fieldWidth }}
          />
          <br />
          <br />
          <Button
            sx={{ backgroundColor: "#fec861" }}
            onClick={() => updateProfileHandler()}
          >
            Update
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default ProfileForm;

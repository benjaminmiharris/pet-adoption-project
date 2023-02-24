import * as React from "react";

import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { UserContext } from "../../../context/UserContext";

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

  return (
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
        <TextField
          label="Mobile"
          value={userMobile}
          onChange={(e) => setMobileHandler(e)}
          sx={{ m: 1, width: fieldWidth }}
        />
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
          onClick={() => {
            updateUserProfile();
          }}
        >
          Update
        </Button>
      </div>
    </Box>
  );
};

export default ProfileForm;

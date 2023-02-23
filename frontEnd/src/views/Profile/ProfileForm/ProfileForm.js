import * as React from "react";

import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const ProfileForm = () => {
  const fieldWidth = "30ch";
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexWrap: "wrap" }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
        />

        <TextField
          label="First name"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
        />
        <TextField
          label="Last name"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
        />
        <TextField
          label="Mobile"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
        />
        <TextField
          id="outlined-textarea"
          label="Short bio"
          placeholder="Placeholder"
          multiline
          rows={6}
          sx={{ m: 1, width: fieldWidth }}
        />
        <br />
        <br />
        <Button>Update</Button>
      </div>
    </Box>
  );
};

export default ProfileForm;

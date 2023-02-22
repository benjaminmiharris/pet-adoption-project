import * as React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import Textarea from "@mui/joy/Textarea";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ProfileForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPasswordConfirm = (event) => {
    event.preventDefault();
  };

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
        {/* <FormControl sx={{ m: 1, width: fieldWidth }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: fieldWidth }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password Confirm
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-confirm"
            type={showPasswordConfirm ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordConfirm}
                  onMouseDown={handleMouseDownPasswordConfirm}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="PasswordConfirm"
          />
        </FormControl> */}
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
        {/* <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack> */}
      </div>
    </Box>
  );
};

export default ProfileForm;

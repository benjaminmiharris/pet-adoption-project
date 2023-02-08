import * as React from "react";
import { useState } from "react";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "react-bootstrap/Button";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signin = () => {
  const { setUserEmail, setUserPassword, signIn } = useContext(UserContext);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box
        component="form"
        sx={{ display: "flex", flexWrap: "wrap" }}
        noValidate
        autoComplete="off"
        justifyContent={"center"}
      >
        <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />

        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            onChange={(e) => setUserPassword(e.target.value)}
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
      </Box>
      <br />
      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          signIn();
        }}
      >
        Login
      </Button>{" "}
    </>
  );
};

export default Signin;

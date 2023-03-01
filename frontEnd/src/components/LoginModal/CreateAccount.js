import * as React from "react";

import { useContext, useState } from "react";

// import { createAccount } from "../../redux/user";
// import { useDispatch } from "react-redux";

import { UserContext } from "../../context/UserContext";

import Button from "react-bootstrap/Button";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAccount = ({ handler }) => {
  const {
    setUserEmail,
    userPassword,
    setUserPassword,
    userPasswordConfirm,
    setUserPasswordConfirm,
    userEmail,
    setUserFirstName,
    userFirstName,
    userLastName,
    setUserLastName,

    setUserMobile,
    createUserAccount,
  } = useContext(UserContext);

  const [showPassword, setShowPassword] = React.useState(false);
  const [timer, setTimer] = useState(null);
  const [formValid, setFormValid] = useState(false);

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

  const notify = (message) => toast(message);

  const passwordMatch = (password, repeatPassword) => {
    let message;
    if (password === repeatPassword) {
      return message;
    } else {
      return notify("Passwords do not match");
    }
  };

  React.useEffect(() => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        passwordMatch(userPassword, userPasswordConfirm);
      }, 400)
    );
  }, [userPasswordConfirm]);

  const validateForm = () => {
    if (
      userPassword !== userPasswordConfirm ||
      !userEmail ||
      !userFirstName ||
      !userLastName
    ) {
      // form is not valid
      return false;
    }
    setFormValid(true);
    // form is valid
    return true;
  };

  React.useEffect(() => {
    validateForm();
  }, [
    userEmail,
    userLastName,
    userFirstName,
    userPasswordConfirm,
    userPassword,
  ]);

  const submitHandler = async () => {
    await createUserAccount();
    await handler();

    // if (outcome == 400) {
    //   notify("Error. Please try again");
    // }
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
          required
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <FormControl sx={{ m: 1, width: fieldWidth }} variant="outlined">
          <InputLabel required htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setUserPassword(e.target.value)}
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
        <ToastContainer />

        <FormControl sx={{ m: 1, width: fieldWidth }} variant="outlined">
          <InputLabel required htmlFor="outlined-adornment-password">
            Password Confirm
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-confirm"
            type={showPasswordConfirm ? "text" : "password"}
            onChange={(e) => setUserPasswordConfirm(e.target.value)}
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
        </FormControl>
        <TextField
          required
          label="First name"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setUserFirstName(e.target.value)}
        />
        <TextField
          required
          label="Last name"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setUserLastName(e.target.value)}
        />
        <TextField
          type="number"
          label="Mobile"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setUserMobile(e.target.value)}
        />
        <br />
        <Button
          disabled={!formValid}
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default CreateAccount;

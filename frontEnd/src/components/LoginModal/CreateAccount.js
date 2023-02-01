import * as React from "react";

import { useContext } from "react";

import { createAccount } from "../../redux/user";
import { useDispatch } from "react-redux";

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

const CreateAccount = () => {
  const dispatch = useDispatch();

  const {
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
  } = useContext(UserContext);

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

  const createAccount = async () => {
    try {
      const reponse = await fetch("http://localhost:3005/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          firstname: userFirstName,
        }),
      });

      const json = await reponse.json();
      console.log("success", json);
    } catch (e) {
      console.log(e);
    }

    // const result = await reponse.JSON();
    // console.log(result);
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
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <FormControl sx={{ m: 1, width: fieldWidth }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
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
        <FormControl sx={{ m: 1, width: fieldWidth }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
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
          label="First name"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setUserFirstName(e.target.value)}
        />
        <TextField
          label="Last name"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setUserLastName(e.target.value)}
        />
        <TextField
          label="Mobile"
          //   id="outlined-start-adornment"
          sx={{ m: 1, width: fieldWidth }}
          onChange={(e) => setUserMobile(e.target.value)}
        />
        <br />
        <Button
          variant="primary"
          type="submit"
          onClick={
            createAccount
            // dispatch(
            //   createAccount({
            //     email: userEmail,
            //     password: userPassword,
            //     passwordVerify: userPasswordConfirm,
            //     firstName: userFirstName,
            //     lastName: userLastName,
            //     mobile: userMobile,
            //   })
            // )
          }
        >
          Send{" "}
        </Button>{" "}
      </div>
    </Box>
  );
};

export default CreateAccount;

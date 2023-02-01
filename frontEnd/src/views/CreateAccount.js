import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// import "../style/create-account.css";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="create-account-container">
      <Row>
        <Col sm={{ span: 5, order: 1 }} md={{ span: 5, order: 1 }}>
          <img
            className="create-account-img"
            alt="puppy image"
            src="https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1658dd8ec955b37b0710145e55f7478d9302136a.jpg"
          />
        </Col>
        <Col
          xs={{ span: 6, order: 2 }}
          sm={{ span: 6, order: 2 }}
          md={{ span: 6, order: 2 }}
        >
          <Row className="mt-5">
            <h1 className="banner-header">Create an account </h1>
            <h3 className="banner-header sub">
              Get started by entering your details below:{" "}
            </h3>

            <Box
              component="form"
              sx={{ display: "flex", flexWrap: "wrap" }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  label="First name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                />
                <TextField
                  label="Last name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                />
                <TextField
                  label="Mobile"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                />
                <TextField
                  label="Email"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                />
                <TextField
                  label="Username"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                />
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
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
                <br />
                <br />

                <Stack direction="row" spacing={2}>
                  <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                  </Button>
                </Stack>
              </div>
            </Box>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CreateAccount;

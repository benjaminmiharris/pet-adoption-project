import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import { FaPaw } from "react-icons/fa";

import { LoginModalContext } from "../../context/LoginModalContext";
import { LoginModalPopup } from "../../components/LoginModal/LoginModal";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

import "./navbar.css";

const Navigationbar = () => {
  const { setModalShow } = useContext(LoginModalContext);
  const { authToken, logoutStorage } = useContext(AuthContext);

  function refreshPage() {
    window.location.reload(false);
  }

  const logoutHandler = () => {
    logoutStorage();
    refreshPage();
  };

  return (
    <Navbar
      bg="custom-color"
      variant="dark"
      sticky="top"
      className="nav-bar-cstm"
    >
      <Container>
        <Navbar.Brand href="/">
          <FaPaw size={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link wht" href="/search">
              Search
            </Nav.Link>

            {authToken && (
              <NavDropdown
                className="wht"
                title="Dashboard"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/my-pets">My Pets </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Users </NavDropdown.Item>
                <NavDropdown.Item href="/create-pet">Add Pet</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  All Pets{" "}
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              {!authToken ? (
                <Button
                  variant="outline-light"
                  onClick={() => setModalShow(true)}
                >
                  Login
                </Button>
              ) : (
                <Button
                  variant="outline-light"
                  onClick={() => {
                    logoutHandler();
                  }}
                >
                  Logout
                </Button>
              )}

              <LoginModalPopup onHide={() => setModalShow(false)} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;

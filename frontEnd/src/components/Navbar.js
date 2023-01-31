import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import { FaPaw } from "react-icons/fa";

import { LoginModalContext } from "../context/LoginModalContext";
import { LoginModalPopup } from "./LoginModal";
import { useContext, useEffect } from "react";

import "../style/navbar.css";

const Navigationbar = () => {
  const { setModalShow } = useContext(LoginModalContext);

  return (
    <Navbar bg="custom-color" variant="dark" sticky="top">
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
            <NavDropdown
              className="wht"
              title="Dashboard"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Pets </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Add Pet</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Users </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">All Pets </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <Button
                variant="outline-light"
                onClick={() => setModalShow(true)}
              >
                Login
              </Button>
              <LoginModalPopup onHide={() => setModalShow(false)} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;

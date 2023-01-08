import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import { FaPaw } from "react-icons/fa";

import { LoginModalContext } from "../context/LoginModalContext";
import { LoginModalPopup } from "./LoginModal";
import { useContext } from "react";

import "../style/navbar.css";

const Navigationbar = () => {
  const { setModalShow } = useContext(LoginModalContext);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar-container fixed-top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <FaPaw size={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="#features">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
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

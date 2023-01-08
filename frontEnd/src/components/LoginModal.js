import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { LoginModalContext } from "../context/LoginModalContext";

function LoginModalPopup() {
  const { modalShow, setModalShow } = useContext(LoginModalContext);

  const navigate = useNavigate();

  const navigateCreateAccount = () => {
    navigate("/create-account");

    setModalShow(false);
  };

  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        onClick={() => {
          setModalShow(false);
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">Sign in </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Log in to your account</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
        <p>Forgot password? </p>
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={() => navigateCreateAccount()}>
            Create an account
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { LoginModalPopup };

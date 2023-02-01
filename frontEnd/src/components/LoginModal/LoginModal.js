import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useContext, useState } from "react";
import { LoginModalContext } from "../../context/LoginModalContext";

import Signin from "./Signin";
import CreateAccount from "./CreateAccount";

function LoginModalPopup() {
  const { modalShow, setModalShow } = useContext(LoginModalContext);

  const [createAccount, setCreateAccount] = useState(false);

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
      ></Modal.Header>
      <Modal.Body className="text-center">
        <h4>
          {createAccount ? "Lets create an account" : "Log in to your account"}
        </h4>

        {createAccount ? (
          <>
            {" "}
            <p>
              Already have an account?{" "}
              <a
                href="#"
                onClick={() => {
                  setCreateAccount(!createAccount);
                }}
              >
                Log in{" "}
              </a>
            </p>{" "}
            <CreateAccount />{" "}
          </>
        ) : (
          <>
            {" "}
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                onClick={() => {
                  setCreateAccount(!createAccount);
                }}
              >
                Create an account
              </a>
            </p>{" "}
            <Signin />
          </>
        )}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export { LoginModalPopup };

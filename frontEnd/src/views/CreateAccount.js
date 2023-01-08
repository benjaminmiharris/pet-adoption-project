import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "../style/create-account.css";

const CreateAccount = () => {
  return (
    <Container className="create-account-body">
      <Row>
        <Col>
          <img
            className="create-account-img"
            alt="puppy image"
            src="https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1658dd8ec955b37b0710145e55f7478d9302136a.jpg"
          />
        </Col>
        <Col>
          <Form>
            <h2>Create account</h2>
            <p>Please complete the form below to create your account</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Label>Enter you password</Form.Label>

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
                type="password"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Show/Hide
              </Button>
            </InputGroup>

            <Form.Label>Repeat your password</Form.Label>

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Password"
                aria-label="Repeat Password"
                aria-describedby="basic-addon2"
                type="password"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Show/Hide
              </Button>
            </InputGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAccount;

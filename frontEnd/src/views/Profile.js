import React from "react";
import ProfileForm from "../components/ProfileForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <>
      <Row>
        <h1>Some image or pic upload</h1>
      </Row>
      <Row>
        <Col className="md-4"></Col>
        <Col className="md-4">
          <h1>Hi {user.email}</h1>

          <ProfileForm />
        </Col>
      </Row>
    </>
  );
};

export default Profile;

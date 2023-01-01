import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "../style/home-banner.css";

const HomeBanner = () => {
  return (
    <div className="tester">
      <Row className=" align-items-center justify-content-center">
        <Col
          sm={{ span: 12, order: 1 }}
          md={{ span: 6, order: 2 }}
          className="home-banner banner-image"
        >
          <img
            className="mx-auto d-block"
            src="https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/2aa94323e32e0c7612ff68ac031b92f47a2965de.png"
            alt="img of pug in pink circle"
          />
        </Col>
        <Col
          sm={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
          className="home-banner banner-header"
        >
          <h1>Find your dream Pet here</h1>
          <Button variant="primary">Get Started</Button>
        </Col>
      </Row>
    </div>
  );
};

export default HomeBanner;

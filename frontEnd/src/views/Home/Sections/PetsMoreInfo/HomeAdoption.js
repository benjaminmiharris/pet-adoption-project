import InfoBox from "../../../../components/InfoBox";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./home-adoption.css";

const HomeAdoption = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="home-adoption-container swiper">
      <Row className="text-left mt-5 ">
        <Col>
          <Carousel responsive={responsive}>
            <InfoBox
              image={
                "https://pet-adoption-project.s3.eu-west-2.amazonaws.com/Untitled+design+(32).png"
              }
              header={"Bringing your pet home"}
              subHeader={"sub-header"}
            />
            <InfoBox
              image={
                "https://pet-adoption-project.s3.eu-west-2.amazonaws.com/3.png"
              }
              header={"Keeping your family member fed"}
              subHeader={"sub-header"}
            />
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default HomeAdoption;

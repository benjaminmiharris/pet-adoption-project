import Row from "react-bootstrap/Row";

import PetListing from "../../../../components/petCard/PetListing";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./home-about.css";

const HomeAbout = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="about-container">
      <Row className="pt-5">
        <p className="top-header">Lets learn something about pets.</p>
        <h2 className="second-header">Ready to fill your home with love? </h2>
      </Row>
      <div className="pets-carousel">
        <Carousel containerClass="carousel-container" responsive={responsive}>
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/1dcd6719f6d458bbb91b2bf750c6df56fc97caa5.jpg"
            }
            petName={"Charlie"}
            petStatus={"Adopted"}
          />

          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/40c7db5af77db6783ef8625adda935282b544cc4.jpg"
            }
            petName={"Charlie"}
            petStatus={"Foster"}
          />
          <PetListing
            imageSrc={
              "https://aish.s3.eu-west-2.amazonaws.com/public/files/uploads/aab7db1bc7ad3b7fd46bbee59f044463e568d5e1.jpg"
            }
            petName={"Charlie"}
            petStatus={"Adopted"}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeAbout;

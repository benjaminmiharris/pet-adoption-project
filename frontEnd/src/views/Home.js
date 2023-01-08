import Container from "react-bootstrap/Container";
import HomeAbout from "../components/HomeAbout";
import HomeBanner from "../components/HomeBanner";

import "../style/home-view.css";

const Home = () => {
  return (
    <Container>
      <HomeBanner />
      <HomeAbout />
    </Container>
  );
};

export default Home;

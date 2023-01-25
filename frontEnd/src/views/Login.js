import Container from "react-bootstrap/Container";
import HomeAbout from "../components/HomeAbout";
import HomeAdoption from "../components/HomeAdoption";
import HomeBanner from "../components/HomeBanner";

import "../style/home-view.css";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeAbout />
      <HomeAdoption />
    </div>
  );
};

export default Home;

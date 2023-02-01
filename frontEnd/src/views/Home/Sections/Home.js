import HomeAbout from "./PetsSlider/HomeAbout";
import HomeAdoption from "./PetsMoreInfo/HomeAdoption";
import HomeBanner from "./Banner/HomeBanner";

import "./home-view.css";

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

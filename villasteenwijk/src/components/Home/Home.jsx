import stl from "./Home.module.css";
import Header from "./header/Header";
import Stijlvol from "./stijlvolovernachten/Stijlvol";
import Reviews from "./reviews/Reviews";
import Omgeving from "./omgeving/Omgeving";

const Home = () => {
  return (
    <div className={stl.home}>
      <Header />
      <Stijlvol />
      <Reviews />
      <Omgeving />
    </div>
  );
};

export default Home;

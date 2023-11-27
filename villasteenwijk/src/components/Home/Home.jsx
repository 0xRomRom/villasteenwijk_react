import stl from "./Home.module.css";
import Header from "./header/Header";
import Stijlvol from "./stijlvolovernachten/Stijlvol";
import Reviews from "./reviews/Reviews";

const Home = () => {
  return (
    <div className={stl.home}>
      <Header />
      <Stijlvol />
      <Reviews />
    </div>
  );
};

export default Home;

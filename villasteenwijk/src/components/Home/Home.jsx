import stl from "./Home.module.css";
import Header from "./header/Header";
import Stijlvol from "./stijlvolovernachten/Stijlvol";

const Home = () => {
  return (
    <div className={stl.home}>
      <Header />
      <Stijlvol />
    </div>
  );
};

export default Home;

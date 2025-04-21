import stl from "./Home.module.css";
import Header from "./header/Header";
import Stijlvol from "./stijlvolovernachten/Stijlvol";
import Reviews from "./reviews/Reviews";
import Omgeving from "./omgeving/Omgeving";
import Beleef from "./beleef/Beleef";

const Home = ({ currentLanguage }) => {
  return (
    <div className={stl.home}>
      <Header currentLanguage={currentLanguage} />
      <Stijlvol currentLanguage={currentLanguage} />
      <Reviews currentLanguage={currentLanguage} />
      <Omgeving currentLanguage={currentLanguage} />
      <Beleef currentLanguage={currentLanguage} />
    </div>
  );
};

export default Home;

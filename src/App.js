import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import KamersPrijzen from "./components/kamersprijzen/KamersPrijzen";
import Fotos from "./components/Fotos/Fotos";
import Media from "./components/Media/Media";
import HouseTour from "./components/HouseTour/HouseTour";
import Activiteiten from "./components/activiteiten/Activiteiten";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./utils/ScrollToTop";
import CookieBanner from "./utils/cookiebanner/CookieBanner";

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState("Dutch");

  useEffect(() => {
    console.log(currentLanguage);
  }, [currentLanguage]);

  return (
    <div className="App">
      <Navbar
        setCurrentLanguage={setCurrentLanguage}
        currentLanguage={currentLanguage}
      />
      <ScrollToTop />
      <CookieBanner />
      <Routes>
        <Route
          index
          path="/"
          element={<Home currentLanguage={currentLanguage} />}
        />
        <Route
          path="/kamersprijzen"
          element={<KamersPrijzen currentLanguage={currentLanguage} />}
        />
        <Route
          path="/fotos"
          element={<Fotos currentLanguage={currentLanguage} />}
        />
        <Route
          path="/media"
          element={<Media currentLanguage={currentLanguage} />}
        />
        <Route
          path="/housetour"
          element={<HouseTour currentLanguage={currentLanguage} />}
        />
        <Route
          path="/activiteiten"
          element={<Activiteiten currentLanguage={currentLanguage} />}
        />
        <Route
          path="/contact"
          element={<Contact currentLanguage={currentLanguage} />}
        />
      </Routes>
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default App;

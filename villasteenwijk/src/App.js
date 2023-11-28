import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import KamersPrijzen from "./components/kamersprijzen/KamersPrijzen";
import Fotos from "./components/Fotos/Fotos";
import Media from "./components/Media/Media";
import HouseTour from "./components/HouseTour/HouseTour";
import Activiteiten from "./components/activiteiten/Activiteiten";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/kamersprijzen" element={<KamersPrijzen />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/media" element={<Media />} />
        <Route path="/housetour" element={<HouseTour />} />
        <Route path="/activiteiten" element={<Activiteiten />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

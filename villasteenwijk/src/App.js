import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import KamersPrijzen from "./components/kamersprijzen/KamersPrijzen";
import Fotos from "./components/Fotos/Fotos";
import Media from "./components/Media/Media";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/kamersprijzen" element={<KamersPrijzen />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/media" element={<Media />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

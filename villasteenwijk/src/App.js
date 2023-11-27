import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import KamersPrijzen from "./components/kamersprijzen/KamersPrijzen";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/kamersprijzen" element={<KamersPrijzen />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

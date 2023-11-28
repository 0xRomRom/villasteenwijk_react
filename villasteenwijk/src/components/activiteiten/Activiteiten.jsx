import stl from "./Activiteiten.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion as m } from "framer-motion";
import { useState, useMemo } from "react";

//Kamer 1 Hildo Krop
import Pic1 from "../../assets/media/1.webp";
import Pic2 from "../../assets/media/2.webp";
import Pic3 from "../../assets/media/3.webp";
import Pic4 from "../../assets/media/4.webp";

const kamerImages = [Pic1, Pic2, Pic3, Pic4];

const Activiteiten = () => {
  const [overlaySrc, setOverlaySrc] = useState("");
  const kamerImgs = useMemo(() => kamerImages, []);

  const handleModalOpen = (newSrc) => {
    setOverlaySrc(newSrc);
  };

  return (
    <div className={stl.portfolio}>
      <m.header
        className={stl.activityHeader}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <m.h1
          initial={{ opacity: 0, x: "-20px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1.25 }}
        >
          Activiteiten
        </m.h1>
      </m.header>
      <div className={stl.contentWrap}></div>
    </div>
  );
};

export default Activiteiten;

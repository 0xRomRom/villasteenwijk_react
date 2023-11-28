import stl from "./Fotos.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion as m } from "framer-motion";
import Overlay from "./Overlay";
import { useState, useMemo } from "react";

//Kamer 1 Hildo Krop
import Pic1 from "../../assets/hildokrop/Pic1.webp";
import Pic2 from "../../assets/hildokrop/Pic2.webp";
import Pic3 from "../../assets/hildokrop/Pic3.webp";
import Pic4 from "../../assets/hildokrop/Pic4.webp";
import Pic5 from "../../assets/hildokrop/Pic5.webp";
import Pic6 from "../../assets/hildokrop/Pic6.webp";
import Pic7 from "../../assets/hildokrop/Pic7.webp";
import Pic8 from "../../assets/hildokrop/Pic8.webp";

//Kamer 2 Tromp meester
import Pic21 from "../../assets/trompmeesters/Pic1.webp";
import Pic22 from "../../assets/trompmeesters/Pic2.webp";
import Pic23 from "../../assets/trompmeesters/Pic3.webp";
import Pic24 from "../../assets/trompmeesters/Pic4.webp";
import Pic25 from "../../assets/trompmeesters/Pic5.webp";
import Pic26 from "../../assets/trompmeesters/Pic6.webp";
import Pic27 from "../../assets/trompmeesters/Pic7.webp";
import Pic28 from "../../assets/trompmeesters/Pic8.webp";

//Kamer 3 Kleibeuker
import Pic31 from "../../assets/kleibeuker/Pic1.webp";
import Pic32 from "../../assets/kleibeuker/Pic2.webp";
import Pic33 from "../../assets/kleibeuker/Pic3.webp";
import Pic34 from "../../assets/kleibeuker/Pic4.webp";
import Pic35 from "../../assets/kleibeuker/Pic5.webp";
import Pic36 from "../../assets/kleibeuker/Pic6.webp";
import Pic37 from "../../assets/kleibeuker/Pic7.webp";
import Pic38 from "../../assets/kleibeuker/Pic8.webp";

//Kamer 4 Johan van den kornput
import Pic41 from "../../assets/johanvandenkornput/Pic1.webp";
import Pic42 from "../../assets/johanvandenkornput/Pic2.webp";
import Pic43 from "../../assets/johanvandenkornput/Pic3.webp";
import Pic44 from "../../assets/johanvandenkornput/Pic4.webp";
import Pic45 from "../../assets/johanvandenkornput/Pic5.webp";
import Pic46 from "../../assets/johanvandenkornput/Pic6.webp";
import Pic47 from "../../assets/johanvandenkornput/Pic7.webp";
import Pic48 from "../../assets/johanvandenkornput/Pic8.webp";

//Kamer 5 Giethoorn
import Pic51 from "../../assets/giethoorn/Pic1.webp";
import Pic52 from "../../assets/giethoorn/Pic2.webp";
import Pic53 from "../../assets/giethoorn/Pic3.webp";
import Pic54 from "../../assets/giethoorn/Pic4.webp";
import Pic55 from "../../assets/giethoorn/Pic5.webp";
import Pic56 from "../../assets/giethoorn/Pic6.webp";
import Pic57 from "../../assets/giethoorn/Pic7.webp";
import Pic58 from "../../assets/giethoorn/Pic8.webp";

//Kamer 6 Giethoorn
import Pic61 from "../../assets/appartement/Pic1.webp";
import Pic62 from "../../assets/appartement/Pic2.webp";
import Pic63 from "../../assets/appartement/Pic3.webp";
import Pic64 from "../../assets/appartement/Pic4.webp";
import Pic65 from "../../assets/appartement/Pic5.webp";
import Pic66 from "../../assets/appartement/Pic6.webp";
import Pic67 from "../../assets/appartement/Pic7.webp";
import Pic68 from "../../assets/appartement/Pic8.webp";

const kamerImages = [
  Pic1,
  Pic2,
  Pic3,
  Pic4,
  Pic5,
  Pic6,
  Pic7,
  Pic8,
  Pic21,
  Pic22,
  Pic23,
  Pic24,
  Pic25,
  Pic26,
  Pic27,
  Pic28,
  Pic31,
  Pic32,
  Pic33,
  Pic34,
  Pic35,
  Pic36,
  Pic37,
  Pic38,
  Pic41,
  Pic42,
  Pic43,
  Pic44,
  Pic45,
  Pic46,
  Pic47,
  Pic48,
  Pic51,
  Pic52,
  Pic53,
  Pic54,
  Pic55,
  Pic56,
  Pic57,
  Pic58,
  Pic61,
  Pic62,
  Pic63,
  Pic64,
  Pic65,
  Pic66,
  Pic67,
  Pic68,
];

const Fotos = () => {
  const [overlaySrc, setOverlaySrc] = useState("");
  const kamerImgs = useMemo(() => kamerImages, []);

  const handleModalOpen = (newSrc) => {
    setOverlaySrc(newSrc);
  };

  return (
    <>
      {overlaySrc && (
        <Overlay overlaySrc={overlaySrc} setOverlaySrc={setOverlaySrc} />
      )}
      <div className={stl.portfolio}>
        <div className={stl.topBlock}>
          <div className={stl.flexdiv}>
            <m.h1
              initial={{ opacity: 0, x: "-20px" }}
              whileInView={{ opacity: 1, x: "0px" }}
              transition={{ duration: 1.25 }}
            >
              Foto's
            </m.h1>
          </div>
        </div>
        <div className={stl.tilesGrid}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {kamerImgs.map((image) => {
                return (
                  <m.img
                    key={image}
                    src={image}
                    alt="Floor image"
                    className={stl.tileImg}
                    initial={{ opacity: 0, y: "5px" }}
                    whileInView={{ opacity: 1, y: "0px" }}
                    onClick={() => handleModalOpen(image)}
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default Fotos;

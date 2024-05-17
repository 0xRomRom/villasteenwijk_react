import stl from "./Media.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion as m } from "framer-motion";
import Overlay from "./Overlay";
import { useState, useMemo } from "react";

//Kamer 1 Hildo Krop
import Pic1 from "../../assets/media/1.webp";
import Pic2 from "../../assets/media/2.webp";
import Pic3 from "../../assets/media/3.webp";
import Pic4 from "../../assets/media/4.webp";
import Pic5 from "../../assets/media/5.webp";

const kamerImages = [Pic1, Pic2, Pic3, Pic4, Pic5];

const Media = ({ currentLanguage }) => {
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
              {currentLanguage === "Dutch" && "Media"}
              {currentLanguage === "German" && "Medien"}
              {currentLanguage === "Chinese" && "媒体"}
              {currentLanguage === "English" && "Media"}
              {currentLanguage === "Spanish" && "Medios"}
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

export default Media;

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

const kamerImages = [Pic1, Pic2, Pic3, Pic4];

const Media = () => {
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
            <h1>Media</h1>
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

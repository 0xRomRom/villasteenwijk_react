import stl from "./KamersPrijzen.module.css";
import { motion as m } from "framer-motion";
import door from "../../assets/icons/Door.webp";
import appartment from "../../assets/icons/Appartement.webp";
import KamerModal from "./KamerModal";
import { useState } from "react";

const KamersPrijzen = ({ currentLanguage }) => {
  const [kamerKeuze, setKamerKeuze] = useState(null);

  const openModal = (room) => {
    setKamerKeuze(room);
  };

  return (
    <main className={stl.kamersprijzen}>
      {kamerKeuze && (
        <KamerModal
          kamerKeuze={kamerKeuze}
          setKamerKeuze={setKamerKeuze}
          currentLanguage={currentLanguage}
        />
      )}

      <m.h1
        className={stl.hero}
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1.25 }}
      >
        {currentLanguage === "Dutch" && "Kamers & Prijzen"}
        {currentLanguage === "German" && "Zimmer & Preise"}
        {currentLanguage === "Chinese" && "房间及价格"}
        {currentLanguage === "English" && "Rooms & Prices"}
      </m.h1>
      {!kamerKeuze && (
        <>
          <div className={stl.fiveDoorGrid}>
            <div className={stl.doorTile} onClick={() => openModal(1)}>
              <img src={door} alt="Deur" className={stl.doorImg} />
              <span className={stl.doorName}>1. Hildo Krop</span>
            </div>
            <div className={stl.doorTile} onClick={() => openModal(2)}>
              <img src={door} alt="Deur" className={stl.doorImg} />
              <span className={stl.doorName}>2. Tromp Meesters</span>
            </div>
            <div className={stl.doorTile} onClick={() => openModal(3)}>
              <img src={door} alt="Deur" className={stl.doorImg} />
              <span className={stl.doorName}>3. Kleibeuker</span>
            </div>
            <div className={stl.doorTile} onClick={() => openModal(4)}>
              <img src={door} alt="Deur" className={stl.doorImg} />
              <span className={stl.doorName}>4. Johan van den Kornput</span>
            </div>
            <div className={stl.doorTile} onClick={() => openModal(5)}>
              <img src={door} alt="Deur" className={stl.doorImg} />
              <span className={stl.doorName}>5. Giethoorn</span>
            </div>
          </div>
          <div className={stl.appartmentGrid} onClick={() => openModal(6)}>
            <img
              src={appartment}
              alt="Appartment"
              className={stl.appartmentImg}
            />
            <span className={stl.appTitle}>
              {currentLanguage === "Dutch" && "Appartement Villa Steenwyck"}
              {currentLanguage === "German" && "Apartement Villa Steenwyck"}
              {currentLanguage === "Chinese" && "斯汀威克别墅公寓"}
              {currentLanguage === "English" && "Appartment Villa Steenwyck"}
            </span>
          </div>
        </>
      )}
    </main>
  );
};

export default KamersPrijzen;

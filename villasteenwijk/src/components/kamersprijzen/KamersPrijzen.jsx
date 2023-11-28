import stl from "./KamersPrijzen.module.css";
import { motion as m } from "framer-motion";
import door from "../../assets/icons/Door.webp";
import appartment from "../../assets/icons/Appartement.webp";
import KamerModal from "./KamerModal";
import { useState } from "react";

const KamersPrijzen = () => {
  const [kamerKeuze, setKamerKeuze] = useState(null);

  const openModal = (room) => {
    setKamerKeuze(room);
  };

  return (
    <main className={stl.kamersprijzen}>
      {kamerKeuze && (
        <KamerModal kamerKeuze={kamerKeuze} setKamerKeuze={setKamerKeuze} />
      )}

      <m.h1
        className={stl.hero}
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1.25 }}
      >
        Kamers & Prijzen
      </m.h1>
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
        <img src={appartment} alt="Appartment" className={stl.appartmentImg} />
        <span className={stl.appTitle}>Appartement Villa Steenwyck</span>
      </div>
    </main>
  );
};

export default KamersPrijzen;

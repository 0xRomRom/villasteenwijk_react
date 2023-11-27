import stl from "./KamersPrijzen.module.css";
import { motion as m } from "framer-motion";
import door from "../../assets/icons/Door.webp";
import appartment from "../../assets/icons/Appartement.webp";
import KamerModal from "./KamerModal";

const KamersPrijzen = () => {
  return (
    <main className={stl.kamersprijzen}>
      <KamerModal />
      <m.h1
        className={stl.hero}
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1.25 }}
      >
        Kamers & Prijzen
      </m.h1>
      <div className={stl.fiveDoorGrid}>
        <div className={stl.doorTile}>
          <img src={door} alt="Deur" className={stl.doorImg} />
          <span className={stl.doorName}>1. Hildo Krop</span>
        </div>
        <div className={stl.doorTile}>
          <img src={door} alt="Deur" className={stl.doorImg} />
          <span className={stl.doorName}>2. Tromp Meesters</span>
        </div>
        <div className={stl.doorTile}>
          <img src={door} alt="Deur" className={stl.doorImg} />
          <span className={stl.doorName}>3. Kleibeuker</span>
        </div>
        <div className={stl.doorTile}>
          <img src={door} alt="Deur" className={stl.doorImg} />
          <span className={stl.doorName}>4. Johan van den Kornput</span>
        </div>
      </div>
      <div className={stl.appartmentGrid}>
        <img src={appartment} alt="Appartment" className={stl.appartmentImg} />
        <span className={stl.appTitle}>Appartement Villa Steenwyck</span>
      </div>
    </main>
  );
};

export default KamersPrijzen;

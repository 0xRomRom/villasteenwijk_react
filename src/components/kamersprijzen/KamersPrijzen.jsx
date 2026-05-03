import stl from "./KamersPrijzen.module.css";
import { motion as m } from "framer-motion";
import door from "../../assets/icons/Door.webp";
import appartment from "../../assets/icons/Appartement.webp";
import KamerModal from "./KamerModal";
import { useEffect, useState } from "react";
import Breakfast1 from "../../assets/ontbijt/Ontbijt1.webp";
import Breakfast2 from "../../assets/ontbijt/Ontbijt2.webp";

const KamersPrijzen = ({ currentLanguage }) => {
  const [kamerKeuze, setKamerKeuze] = useState(null);
  const [showOntbijt, setShowOntbijt] = useState(false);
  const [breakfastImgIndex, setBreakfastImgIndex] = useState(0);

  const breakfastImages = [Breakfast1, Breakfast2];

  useEffect(() => {
    breakfastImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [breakfastImages, breakfastImages.length]);

  useEffect(() => {
    if (kamerKeuze) return;
    const interval = setInterval(() => {
      setBreakfastImgIndex((prev) => (prev + 1) % breakfastImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [breakfastImages.length, kamerKeuze]);

  const openModal = (room) => {
    setKamerKeuze(room);
  };

  return (
    <main className={stl.kamersprijzen}>
      {showOntbijt && (
        <div
          className={stl.breakfastOverlay}
          onClick={() => setShowOntbijt(false)}
        >
          <m.img
            key={breakfastImgIndex}
            src={breakfastImages[breakfastImgIndex]}
            alt="Breakfast"
            className={stl.breakfastImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className={stl.priceCol}>
            <span>
              {currentLanguage === "Dutch" &&
                "Prijs: €25 per persoon uitgebreid ontbijt in privé kamer."}
              {currentLanguage === "German" &&
                "Preis: €25 pro Person ausgiebiges Frühstück im Privatzimmer."}
              {currentLanguage === "Chinese" &&
                "价格：每人€25，私人房间内的丰盛早餐。"}
              {currentLanguage === "English" &&
                "Price: €25 per person extensive breakfast in private room."}
              {currentLanguage === "Spanish" &&
                "Precio: €25 por persona desayuno completo en habitación privada."}
            </span>
            <span>
              {currentLanguage === "Dutch" &&
                "Prijs: €15 per persoon eenvoudig ontbijt in de hotel."}
              {currentLanguage === "German" &&
                "Preis: €15 pro Person einfaches Frühstück im Hotel."}
              {currentLanguage === "Chinese" &&
                "价格：每人€15，酒店内的简单早餐。"}
              {currentLanguage === "English" &&
                "Price: €15 per person simple breakfast in the hotel."}
              {currentLanguage === "Spanish" &&
                "Precio: €15 por persona desayuno sencillo en el hotel."}
            </span>
          </div>
        </div>
      )}
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
        {currentLanguage === "Spanish" && "Habitaciones y Precios"}
      </m.h1>
      {!kamerKeuze && (
        <>
          <div className={stl.breakfastDiv}>
            {/* <button
              className={stl.breakfastSpan}
              onClick={() => setShowOntbijt(true)}
            >
              {currentLanguage === "Dutch" && "Luxe Ontbijt"}
              {currentLanguage === "German" && "Luxuriöses Frühstück"}
              {currentLanguage === "Chinese" && "豪华早餐"}
              {currentLanguage === "English" && "Luxury Breakfast"}
              {currentLanguage === "Spanish" && "Desayuno de Lujo"}
            </button> */}
          </div>
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
            <div className={stl.doorTile} onClick={() => openModal(6)}>
              <img src={door} alt="Deur" className={stl.doorImg} />
              <span className={stl.doorName}>6. Ramswoerthe</span>
            </div>
          </div>
          {/* <div className={stl.appartmentGrid} onClick={() => openModal(6)}>
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
              {currentLanguage === "Spanish" && "Apartamento Villa Steenwyck"}
            </span>
          </div> */}
        </>
      )}
    </main>
  );
};

export default KamersPrijzen;

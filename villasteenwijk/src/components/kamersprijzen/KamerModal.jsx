import React, { useState, useEffect, useMemo } from "react";
import stl from "./KamerModal.module.css";
import { FaEuroSign } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import { PiForkKnifeBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

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

import kamers from "../../utils/kamersmodal";

const kamer1Images = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8];
const kamer2Images = [Pic21, Pic22, Pic23, Pic24, Pic25, Pic26, Pic27, Pic28];
const kamer3Images = [Pic31, Pic32, Pic33, Pic34, Pic35, Pic36, Pic37, Pic38];
const kamer4Images = [Pic41, Pic42, Pic43, Pic44, Pic45, Pic46, Pic47, Pic48];
const kamer5Images = [Pic51, Pic52, Pic53, Pic54, Pic55, Pic56, Pic57, Pic58];
const kamer6Images = [Pic61, Pic62, Pic63, Pic64, Pic65, Pic66, Pic67, Pic68];
const KamerModal = ({ kamerKeuze, setKamerKeuze, currentLanguage }) => {
  const [activeKamer, setActiveKamer] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [kamerImages, setKamerImages] = useState([]);

  const kamer1Imgs = useMemo(() => kamer1Images, []);
  const kamer2Imgs = useMemo(() => kamer2Images, []);
  const kamer3Imgs = useMemo(() => kamer3Images, []);
  const kamer4Imgs = useMemo(() => kamer4Images, []);
  const kamer5Imgs = useMemo(() => kamer5Images, []);
  const kamer6Imgs = useMemo(() => kamer6Images, []);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const closeModal = () => {
    setKamerKeuze(null);
  };

  const openExternalLink = () => {
    window.open(
      "https://ibe.smarthotel.nl/?id=bbcd1ebf-52ce-44d5-a248-01be65dfecd8",
      "_blank"
    );
  };

  useEffect(() => {
    const kamer = kamers;
    if (kamerKeuze && kamerImages) {
      if (kamerKeuze === 1) {
        setActiveKamer(kamer[0]);
        setKamerImages(kamer1Imgs);
      }
      if (kamerKeuze === 2) {
        setActiveKamer(kamer[1]);
        setKamerImages(kamer2Imgs);
      }
      if (kamerKeuze === 3) {
        setActiveKamer(kamer[2]);
        setKamerImages(kamer3Imgs);
      }
      if (kamerKeuze === 4) {
        setActiveKamer(kamer[3]);
        setKamerImages(kamer4Imgs);
      }
      if (kamerKeuze === 5) {
        setActiveKamer(kamer[4]);
        setKamerImages(kamer5Imgs);
      }
      if (kamerKeuze === 6) {
        setActiveKamer(kamer[5]);
        setKamerImages(kamer6Imgs);
      }
    }
  }, [
    kamerKeuze,
    kamer1Imgs,
    kamer2Imgs,
    kamer3Imgs,
    kamer4Imgs,
    kamer5Imgs,
    kamer6Imgs,
    kamerImages,
  ]);

  return activeKamer.map((kamer) => {
    return (
      <div className={stl.kamermodal} key={Math.random()}>
        <div className={stl.modalWrap}>
          <div className={stl.modal}>
            <div className={stl.closeRow}>
              <IoMdClose className={stl.closeBtn} onClick={closeModal} />
            </div>
          </div>
          <h1 className={stl.hero}>{kamer.hero}</h1>
          <div className={stl.imgWrap}>
            <img
              src={kamerImages[activeButton]}
              alt="B&B Kamer"
              className={stl.roomImg}
            />

            <div className={stl.buttonBox}>
              {[...Array(8)].map((_, index) => (
                <button
                  key={index}
                  className={index === activeButton ? stl.activeButton : ""}
                  onClick={() => handleButtonClick(index)}
                ></button>
              ))}
            </div>
          </div>
          <div className={stl.bottomWrap}>
            <div className={stl.prijsWrap}>
              <div className={stl.personCount}>
                <span className={stl.copyTitle}>
                  {currentLanguage === "Dutch" && "Per nacht"}
                  {currentLanguage === "German" && "Pro nacht"}
                  {currentLanguage === "Chinese" && "每晚"}
                  {currentLanguage === "English" && "Per night"}
                  {currentLanguage === "Spanish" && "Por noche"}
                </span>
              </div>
              <div className={stl.totalWrap}>
                <div className={stl.euroWrapper}>
                  <FaEuroSign className={stl.euro} />
                </div>
                <div className={stl.personWrapper}>
                  <div className={stl.priceBlock}>
                    <IoPeopleSharp className={stl.icon} />
                    {/* <span className={stl.copyTxt}>{kamer["2personen"]},-</span> */}
                  </div>
                  {/* {kamer["3personen"] > 0 && (
                    <div className={stl.priceBlock}>
                      <FaPeopleGroup className={stl.icon} />
                      <span className={stl.copyTxt}>
                        {kamer["3personen"]},-
                      </span>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
            <div className={stl.toeslagWrap}>
              <div className={stl.toeslagTop}>
                <FaExclamationTriangle className={stl.exclamation} />
                <span className={stl.copyTitle}>
                  {currentLanguage === "Dutch" && "Toeristenbelasting"}
                  {currentLanguage === "German" && "Kurtaxe"}
                  {currentLanguage === "Chinese" && "旅游税"}
                  {currentLanguage === "English" && "Tourist tax"}
                  {currentLanguage === "Spanish" && "Impuesto Turístico"}
                </span>
              </div>
              <div className={stl.toeslagBottom}>
                <FaEuroSign className={stl.euro2} />
                <div className={stl.pppnCol}>
                  <span className={stl.copyTxt}>2.50,-</span>
                  <span className={stl.pppnTxt}>p.p.p.n.</span>
                </div>
              </div>
            </div>
            <div className={stl.ontbijtWrap}>
              <div className={stl.toeslagTop}>
                <PiForkKnifeBold className={stl.forkIcon} />
                <span className={stl.copyTitle}>
                  {currentLanguage === "Dutch" && "Heerlijk ontbijt"}
                  {currentLanguage === "German" && "Leckeres frühstück"}
                  {currentLanguage === "Chinese" && "美味的早餐"}
                  {currentLanguage === "English" && "Lovely breakfast"}
                  {currentLanguage === "Spanish" && "Delicioso desayuno"}
                </span>
              </div>
              <div className={stl.toeslagBottom}>
                <FaEuroSign className={stl.euro2} />
                <div className={stl.pppnCol}>
                  <span className={stl.copyTxt}>20,-</span>
                  <span className={stl.pppnTxt}>p.p.p.n.</span>
                </div>
              </div>
            </div>
          </div>
          <div className={stl.descriptionWrap}>
            <div className={stl.copyBox}>
              <div className={stl.copyTextBox}>
                <h2 className={stl.boxTitle}>
                  {currentLanguage === "Dutch" && "Omschrijving"}
                  {currentLanguage === "German" && "Beschreibung"}
                  {currentLanguage === "Chinese" && "描述"}
                  {currentLanguage === "English" && "Description"}
                  {currentLanguage === "Spanish" && "Descripción"}
                </h2>
                <p className={stl.roomCopy}>
                  {kamer.copy1[currentLanguage]}
                  <br />
                  <br />
                  {kamer.copy2[currentLanguage]}
                </p>
              </div>
            </div>
            <div className={stl.utilitiesBox}>
              <div className={stl.utilitiesTextBox}>
                <h2 className={stl.boxTitle}>
                  {currentLanguage === "Dutch" && "Voorzieningen"}
                  {currentLanguage === "German" && "Dienstleistungen"}
                  {currentLanguage === "Chinese" && "服务"}
                  {currentLanguage === "English" && "Services"}
                  {currentLanguage === "Spanish" && "Servicios"}
                </h2>
                <ul className={stl.voorzienList}>
                  {activeKamer.length > 0 &&
                    activeKamer.map((kamer, index) => (
                      <React.Fragment key={index}>
                        {kamer.voorziening[currentLanguage].map(
                          (item, itemIndex) => (
                            <li className={stl.voorziening} key={itemIndex}>
                              {item}
                            </li>
                          )
                        )}
                      </React.Fragment>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={stl.ctaBox}>
            <button className={stl.reserverenCta} onClick={openExternalLink}>
              {currentLanguage === "Dutch" && "Tarieven/Reserveren"}
              {currentLanguage === "German" && "Tarife/Buchen"}
              {currentLanguage === "Chinese" && "費率/预订"}
              {currentLanguage === "English" && "Pricing & Book"}
              {currentLanguage === "Spanish" && "Tarifas/Libro"}
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default KamerModal;

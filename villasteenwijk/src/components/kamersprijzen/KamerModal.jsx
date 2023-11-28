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

//Kamer 2 Hildo Krop
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

import kamers from "../../utils/kamersmodal";

const kamer1Images = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8];
const kamer2Images = [Pic21, Pic22, Pic23, Pic24, Pic25, Pic26, Pic27, Pic28];
const kamer3Images = [Pic31, Pic32, Pic33, Pic34, Pic35, Pic36, Pic37, Pic38];
const KamerModal = ({ kamerKeuze, setKamerKeuze }) => {
  const [activeKamer, setActiveKamer] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [kamerImages, setKamerImages] = useState([]);

  const kamer1Imgs = useMemo(() => kamer1Images, []);
  const kamer2Imgs = useMemo(() => kamer2Images, []);
  const kamer3Imgs = useMemo(() => kamer3Images, []);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const closeModal = () => {
    setKamerKeuze(null);
  };

  const openExternalLink = () => {
    window.open(
      "https://www.booking.com/hotel/nl/villa-steenwyck.nl.html",
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
    }
  }, [kamerKeuze, kamer1Imgs, kamer2Imgs, kamer3Imgs, kamerImages]);

  return activeKamer.map((kamer) => {
    return (
      <div className={stl.kamermodal} key={Math.random()}>
        <div className={stl.modal}>
          <div className={stl.closeRow}>
            <IoMdClose className={stl.closeBtn} onClick={closeModal} />
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
                <span className={stl.copyTitle}>Per nacht</span>
              </div>
              <div className={stl.totalWrap}>
                <div className={stl.euroWrapper}>
                  <FaEuroSign className={stl.euro} />
                </div>
                <div className={stl.personWrapper}>
                  <div className={stl.priceBlock}>
                    <IoPeopleSharp className={stl.icon} />
                    <span className={stl.copyTxt}>{kamer["2personen"]},-</span>
                  </div>
                  {kamer["3personen"] > 0 && (
                    <div className={stl.priceBlock}>
                      <FaPeopleGroup className={stl.icon} />
                      <span className={stl.copyTxt}>
                        {kamer["3personen"]},-
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={stl.toeslagWrap}>
              <div className={stl.toeslagTop}>
                <FaExclamationTriangle className={stl.exclamation} />
                <span className={stl.copyTitle}>Toeristenbelasting</span>
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
                <span className={stl.copyTitle}>Heerlijk ontbijt</span>
              </div>
              <div className={stl.toeslagBottom}>
                <FaEuroSign className={stl.euro2} />
                <div className={stl.pppnCol}>
                  <span className={stl.copyTxt}>14.50,-</span>
                  <span className={stl.pppnTxt}>p.p.p.n.</span>
                </div>
              </div>
            </div>
          </div>
          <div className={stl.descriptionWrap}>
            <div className={stl.copyBox}>
              <div className={stl.copyTextBox}>
                <h2 className={stl.boxTitle}>Omschrijving</h2>
                <p className={stl.roomCopy}>
                  {kamer.copy1}
                  <br />
                  <br />
                  {kamer.copy2}
                </p>
              </div>
            </div>
            <div className={stl.utilitiesBox}>
              <div className={stl.utilitiesTextBox}>
                <h2 className={stl.boxTitle}>Voorzieningen</h2>
                <ul className={stl.voorzienList}>
                  {activeKamer.length > 0 &&
                    activeKamer.map((kamer, index) => (
                      <React.Fragment key={index}>
                        {kamer.voorziening.map((item, itemIndex) => (
                          <li className={stl.voorziening} key={itemIndex}>
                            {item}
                          </li>
                        ))}
                      </React.Fragment>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={stl.ctaBox}>
            <button className={stl.reserverenCta} onClick={openExternalLink}>
              Reserveren
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default KamerModal;

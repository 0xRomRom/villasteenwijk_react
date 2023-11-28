import React, { useState, useEffect } from "react";
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

import kamers from "../../utils/kamersmodal";
const KamerModal = ({ kamerKeuze, setKamerKeuze }) => {
  const [activeKamer, setActiveKamer] = useState([]);
  const [activeButton, setActiveButton] = useState(1);

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

  const imageSources = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8];

  useEffect(() => {
    const kamer = kamers;
    if (kamerKeuze) {
      if (kamerKeuze === 1) {
        setActiveKamer(kamer[0]);
      }
    }
  }, [kamerKeuze]);

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
              src={imageSources[activeButton]}
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

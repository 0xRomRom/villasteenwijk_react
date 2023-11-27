import React, { useState } from "react";
import stl from "./KamerModal.module.css";
import hildoImg1 from "../../assets/hildokrop/Pic1.webp";
import { FaEuroSign } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import { PiForkKnifeBold } from "react-icons/pi";

const KamerModal = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className={stl.kamermodal}>
      <div className={stl.modal}>
        <h1 className={stl.hero}>Hildo krop</h1>
        <div className={stl.imgWrap}>
          <img src={hildoImg1} alt="Hildo Krop Kamer" className={stl.roomImg} />
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
              <div>
                <FaEuroSign className={stl.euro} />
              </div>
              <div className={stl.personWrapper}>
                <div className={stl.priceBlock}>
                  <IoPeopleSharp className={stl.icon} />
                  <span className={stl.copyTxt}>110,-</span>
                </div>
                <div className={stl.priceBlock}>
                  <FaPeopleGroup className={stl.icon} />
                  <span className={stl.copyTxt}>130,-</span>
                </div>
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
                Vernoemd naar de in Steenwijk geboren beroemde kunstenaar en
                beeldhouwer Hildo Krop, de Stadsbeeldhouwer van Amsterdam.
                <br />
                <br />
                Deze prachtige, 2-persoons, lichte, kamer met Engels behang,
                rijke, velourse, gordijnstoffen en zachte vloerbedekking bevind
                zich op de 2e verdieping van Villa Steenwyck met daardoor een
                prachtig uitzicht over vestingstad Steenwijk en de Steenwijker
                toren.
              </p>
            </div>
          </div>
          <div className={stl.utilitiesBox}>
            <div className={stl.utilitiesTextBox}>
              <h2 className={stl.boxTitle}>Voorzieningen</h2>
              <ul className={stl.voorzienList}>
                <li className={stl.voorziening}>
                  Luxe Boxspring bedden (2 bedden tegen elkaar aan, 180x200cm
                  met luxe topper)
                </li>
                <li className={stl.voorziening}>
                  De bedden zijn ook los van elkaar te zetten, als 2 1-persoons
                  bedden van 90x200cm. Indien gewenst
                </li>
                <li className={stl.voorziening}>
                  Satijnen beddengoed en badtextiel van “De witte Lietaer”
                </li>
                <li className={stl.voorziening}>
                  Eet setje om uw ontbijt te nuttigen of een spelletje te spelen
                </li>
                <li className={stl.voorziening}>
                  Eet setje om uw ontbijt te nuttigen of een spelletje te spelen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KamerModal;

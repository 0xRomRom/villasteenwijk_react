import React, { useState } from "react";
import stl from "./KamerModal.module.css";
import { FaEuroSign } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import { PiForkKnifeBold } from "react-icons/pi";

//Kamer 1 Hildo Krop
import Pic1 from "../../assets/hildokrop/Pic1.webp";
import Pic2 from "../../assets/hildokrop/Pic2.webp";
import Pic3 from "../../assets/hildokrop/Pic3.webp";
import Pic4 from "../../assets/hildokrop/Pic4.webp";
import Pic5 from "../../assets/hildokrop/Pic5.webp";
import Pic6 from "../../assets/hildokrop/Pic6.webp";
import Pic7 from "../../assets/hildokrop/Pic7.webp";
import Pic8 from "../../assets/hildokrop/Pic8.webp";

const KamerModal = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const openExternalLink = () => {
    window.open(
      "https://www.booking.com/hotel/nl/villa-steenwyck.nl.html",
      "_blank"
    );
  };

  const imageSources = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8];

  const kamers = {
    kamer1: {
      hero: "Hildo krop",
      "2personen": 109,
      "3personen": 0,
      copy1:
        "Vernoemd naar de in Steenwijk geboren beroemde kunstenaar en beeldhouwer Hildo Krop, de Stadsbeeldhouwer van Amsterdam.",
      copy2:
        "Deze prachtige, 2-persoons, lichte, kamer met Engels behang, rijke, velourse, gordijnstoffen en zachte vloerbedekking bevind zich op de 2e verdieping van Villa Steenwyck met daardoor een prachtig uitzicht over vestingstad Steenwijk en de Steenwijker toren.",
    },
    voorziening: [
      "Luxe Boxspring bedden (2 bedden tegen elkaar aan, 180x200cm met luxe topper)",
      "De bedden zijn ook los van elkaar te zetten, als 2 1-persoons bedden van 90x200cm. Indien gewenst",
      "Satijnen beddengoed en badtextiel van “De witte Lietaer”",
      "Eet setje om uw ontbijt te nuttigen of een spelletje te spelen",
      "Eet setje om uw ontbijt te nuttigen of een spelletje te spelen",
      "Luxe Philips Ambilight TV met Netflix en kabel TV",
      "Gratis super snelle wifi",
      "Voorzien van Daikin warmtepomp airconditioners voor het milieu bewust koelen en verwarmen van uw kamer met ingebouwde flash-streamer luchtreiniging tegen stof, pollen, virussen, bacteriën en allergenen, Voor een altijd frisse “berglucht” in uw kamer",
      "Gedeelde badkamer met toilet, bidet, wastafel en luxe regendouche, met per kamer een plankje voor uw toilet spullen",
      "Gratis koffie (Nespresso) en thee faciliteiten",
      "Koelkast met daarin koel, plat water",
      "2 Luxe, zachte badjassen van “De Witte Lietaer”",
    ],
    images: [
      "../../assets/hildokrop/Pic1.webp",
      "../../assets/hildokrop/Pic2.webp",
      "../../assets/hildokrop/Pic3.webp",
      "../../assets/hildokrop/Pic4.webp",
      "../../assets/hildokrop/Pic5.webp",
      "../../assets/hildokrop/Pic6.webp",
      "../../assets/hildokrop/Pic7.webp",
      "../../assets/hildokrop/Pic8.webp",
    ],
  };

  return (
    <div className={stl.kamermodal}>
      <div className={stl.modal}>
        <h1 className={stl.hero}>Hildo krop</h1>
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
                <li className={stl.voorziening}>
                  Luxe Philips Ambilight TV met Netflix en kabel TV
                </li>
                <li className={stl.voorziening}>Gratis super snelle wifi</li>
                <li className={stl.voorziening}>
                  Voorzien van Daikin warmtepomp airconditioners voor het milieu
                  bewust koelen en verwarmen van uw kamer met ingebouwde
                  flash-streamer luchtreiniging tegen stof, pollen, virussen,
                  bacteriën en allergenen, Voor een altijd frisse “berglucht” in
                  uw kamer
                </li>
                <li className={stl.voorziening}>
                  Gedeelde badkamer met toilet, bidet, wastafel en luxe
                  regendouche, met per kamer een plankje voor uw toilet spullen
                </li>
                <li className={stl.voorziening}>
                  Gratis koffie (Nespresso) en thee faciliteiten
                </li>
                <li className={stl.voorziening}>
                  Koelkast met daarin koel, plat water
                </li>
                <li className={stl.voorziening}>
                  2 Luxe, zachte badjassen van “De Witte Lietaer”
                </li>
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
};

export default KamerModal;

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
      </div>
    </div>
  );
};

export default KamerModal;

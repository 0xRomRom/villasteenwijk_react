import React, { useState } from "react";
import stl from "./KamerModal.module.css";
import hildoImg1 from "../../assets/hildokrop/Pic1.webp";

const KamerModal = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className={stl.kamermodal}>
      <div className={stl.modal}>
        <h1 className={stl.hero}>Hildo krop</h1>
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
    </div>
  );
};

export default KamerModal;

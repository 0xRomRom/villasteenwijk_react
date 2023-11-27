import stl from "./Header.module.css";
import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

const Header = () => {
  const [currImg, setCurrImg] = useState(2);
  const [imgPresent, setImgPresent] = useState(true);

  useEffect(() => {
    setImgPresent(true);
    const imageCycler = setInterval(() => {
      if (currImg === 3) {
        setCurrImg(1);
        setImgPresent(false);
        return;
      }
      if (currImg < 3) {
        setCurrImg((prev) => prev + 1);
        setImgPresent(false);
      }
    }, 5000);

    return () => {
      clearInterval(imageCycler);
    };
  }, [currImg]);

  return (
    <header className={stl.header}>
      <AnimatePresence mode="wait">
        {imgPresent && (
          <m.img
            src={`./landing/${currImg}.webp`}
            alt="Villa Steenwijk Front Cover"
            className={stl.bannerImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

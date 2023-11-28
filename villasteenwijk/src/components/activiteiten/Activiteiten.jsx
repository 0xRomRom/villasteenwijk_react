import stl from "./Activiteiten.module.css";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useMemo, useState } from "react";

import Pic1 from "../../assets/omgeving/1.webp";
import Pic2 from "../../assets/omgeving/2.webp";
import Pic3 from "../../assets/omgeving/3.webp";
import Pic4 from "../../assets/omgeving/4.webp";
import Pic5 from "../../assets/omgeving/5.webp";
import Pic6 from "../../assets/omgeving/6.webp";
// import Pic7 from "../../assets/omgeving/Pic7.webp";
// import Pic8 from "../../assets/omgeving/Pic8.webp";

const Activiteiten = () => {
  const navigate = useNavigate();
  const [hoveredImg, setHoveredImg] = useState(0);

  const kamerImages = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6];
  const kamerImgs = useMemo(() => kamerImages, []);

  const newImg = (img) => {
    setHoveredImg(img);
  };

  return (
    <div className={stl.portfolio}>
      <m.header
        className={stl.activityHeader}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <m.h1
          initial={{ opacity: 0, x: "-20px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1.25 }}
        >
          Activiteiten
        </m.h1>
        <div className={stl.ontDekDiv}>
          <m.h2
            className={stl.heroTxt}
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.25 }}
          >
            Ontdek wat steenwijk te bieden heeft
          </m.h2>
        </div>
      </m.header>
      <div className={stl.contentWrap}>
        <div className={stl.contentTopBlock}>
          <div className={stl.chopperModal}>
            <div className={stl.innerChopperModal}>
              <h2>Huur een E-Chopper</h2>
              <div className={stl.conditionsList}>
                <span className={stl.conditionSpan}>€35,- voor 4 uur</span>
                <span className={stl.conditionSpan}>€50,- voor 1 dag</span>
                <span className={stl.conditionSpan}>
                  1 E-Chopper per persoon
                </span>
                <span className={stl.conditionSpan}>Max bereik: 40KM</span>
                <button
                  className={stl.bookCta}
                  onClick={() => navigate("/contact")}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
          <div className={stl.activiteitenModal}>
            <div className={stl.activLeft}>
              <h2 className={stl.acthero}>Activiteiten</h2>
              <ul className={stl.itemList}>
                <a
                  onMouseOver={() => newImg(0)}
                  target="_blank"
                  href="https://www.hendrickdekeyser.nl/museumbezoek/villa-rams-woerthe-Steenwijk"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    Villa Ramswoerthe
                  </li>
                </a>
                <a
                  onMouseOver={() => newImg(1)}
                  target="_blank"
                  href="https://rijksmonumenten.nl/monument/34576/grote-of-sint-clemenskerk/steenwijk/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Sint Clemens
                    kerk
                  </li>
                </a>
                <a
                  onMouseOver={() => newImg(2)}
                  target="_blank"
                  href="https://rijksmonumenten.nl/monument/34599/kleine-of-onze-lieve-vrouwekerk/steenwijk/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Onze lieve
                    vrouwe kerk
                  </li>
                </a>
                <a
                  onMouseOver={() => newImg(3)}
                  target="_blank"
                  href="https://www.taman-indonesia.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Dierenpark Taman
                    Indonesia
                  </li>
                </a>
                <a
                  onMouseOver={() => newImg(4)}
                  target="_blank"
                  href="https://www.demeenthe.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Theater De
                    Meenthe
                  </li>
                </a>
                <a
                  onMouseOver={() => newImg(5)}
                  target="_blank"
                  href="https://www.stadsmuseumsteenwijk.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Stadsmuseum
                  </li>
                </a>
                <a
                  onMouseOver={() => newImg(6)}
                  target="_blank"
                  href="https://klimbos-overijssel.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Klimbos
                    Avontuurlijk
                  </li>
                </a>
                <a
                  onMouseOver={() => newImg(7)}
                  target="_blank"
                  href="https://www.stadsmuseumsteenwijk.nl/content/19-Stadswandeling-steenwijk.html?menu_parent=19"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Stadswandeling
                    Steenwijk Vestingstad
                  </li>
                </a>
              </ul>
            </div>
            <div className={stl.activRight}>
              <img
                src={kamerImgs[hoveredImg]}
                alt="Activiteiten Steenwijk"
                className={stl.cycleImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activiteiten;

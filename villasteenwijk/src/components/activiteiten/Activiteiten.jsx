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
import Pic7 from "../../assets/omgeving/7.webp";
import Pic8 from "../../assets/omgeving/8.webp";

import Pic21 from "../../assets/regio/1.webp";
import Pic22 from "../../assets/regio/2.webp";
import Pic23 from "../../assets/regio/3.webp";
import Pic24 from "../../assets/regio/4.webp";
import Pic25 from "../../assets/regio/5.webp";
import Pic26 from "../../assets/regio/6.webp";
import Pic27 from "../../assets/regio/7.webp";

import Pic31 from "../../assets/dineren/1.webp";
// import Pic32 from "../../assets/dineren/2.webp";
// import Pic33 from "../../assets/dineren/3.webp";
// import Pic34 from "../../assets/dineren/4.webp";
// import Pic35 from "../../assets/dineren/5.webp";
// import Pic36 from "../../assets/dineren/6.webp";
// import Pic37 from "../../assets/dineren/7.webp";

const Activiteiten = () => {
  const navigate = useNavigate();
  const [activiteitImg, setActiviteitImg] = useState(0);
  const [regioImg, setRegioImg] = useState(0);
  const [dinerenImg, setDinerenImg] = useState(0);

  const activiteitenImages = useMemo(
    () => [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8],
    []
  );
  const activiteitenImgs = useMemo(
    () => activiteitenImages,
    [activiteitenImages]
  );
  const regioImages = useMemo(
    () => [Pic21, Pic22, Pic23, Pic24, Pic25, Pic26, Pic27],
    []
  );
  const regioImgs = useMemo(() => regioImages, [regioImages]);

  const dinerenImages = useMemo(() => [Pic31], []);
  const dinerenImgs = useMemo(() => dinerenImages, [dinerenImages]);

  const newActiviteitenImg = (img) => {
    setActiviteitImg(img);
  };
  const newRegioImg = (img) => {
    setRegioImg(img);
  };
  const newDinerenImg = (img) => {
    setDinerenImg(img);
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
                  onMouseOver={() => newActiviteitenImg(0)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.hendrickdekeyser.nl/museumbezoek/villa-rams-woerthe-Steenwijk"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    Villa Ramswoerthe
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(1)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://rijksmonumenten.nl/monument/34576/grote-of-sint-clemenskerk/steenwijk/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Sint Clemens
                    kerk
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(2)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://rijksmonumenten.nl/monument/34599/kleine-of-onze-lieve-vrouwekerk/steenwijk/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Onze lieve
                    vrouwe kerk
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(3)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.taman-indonesia.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Dierenpark Taman
                    Indonesia
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(4)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.demeenthe.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Theater De
                    Meenthe
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(5)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.stadsmuseumsteenwijk.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Stadsmuseum
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(6)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://klimbos-overijssel.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Klimbos
                    Avontuurlijk
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(7)}
                  target="_blank"
                  rel="noreferrer"
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
                src={activiteitenImgs[activiteitImg]}
                alt="Activiteiten Steenwijk"
                className={stl.cycleImg}
              />
            </div>
          </div>
        </div>
        <div className={stl.regioBlock}>
          <div className={stl.regioModal}>
            <div className={stl.regioLeft}>
              <h2 className={stl.regioHero}>In de regio</h2>
              <ul className={stl.itemList}>
                <a
                  onMouseOver={() => newRegioImg(0)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://giethoorn.com/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    Giethoorn
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(1)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.drenthe.nl/cultuur-erfgoed/hunebedden/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Hunnebedden
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(2)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.staatsbosbeheer.nl/uit-in-de-natuur/locaties/weerribben"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Weerribben
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(3)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mooisteroutes.nl/routes/95b1407/de-woldberg"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> De Woldberg
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(4)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.drenthe.nl/locaties/4274250260/tourist-info-havelte"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Havelte
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(5)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.orchideeenhoeve.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> De Orchideeën
                    Hoeve
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(6)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.friesland.nl/nl/locaties/4140876077/kasteel-old-stoutenburght"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Kasteel Old
                    Stoutenburght
                  </li>
                </a>
              </ul>
            </div>
            <div className={stl.activRight}>
              <img
                src={regioImgs[regioImg]}
                alt="Activiteiten Steenwijk"
                className={stl.cycleImg2}
              />
            </div>
          </div>
        </div>

        <div className={stl.contentTopBlock}>
          <div className={stl.activiteitenModal}>
            <div className={stl.activLeft}>
              <h2 className={stl.acthero}>Dineren</h2>
              <ul className={stl.itemList}>
                <a
                  onMouseOver={() => newDinerenImg(0)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.argentinotango.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    Argentijns restaurant Argentino Tango
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(1)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.woodyshouse.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Woody's
                    Steakhouse
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(2)}
                  target="_blank"
                  rel="noreferrer"
                  href="http://www.hetsteakhouse.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Tennessee
                    Steakhouse
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(3)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://restaurantdeopschepper.com/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Bistro De
                    Opschepper
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(4)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.deherenvanderechter.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> De heren van de
                    rechter
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(5)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://brasseriezusenzo.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Brasserie Zus en
                    Zo
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(6)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.bovenmeestersteenwijk.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Bovenmeester
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(7)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://rhodossteenwijk.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} /> Rhodos
                  </li>
                </a>
              </ul>
            </div>
            <div className={stl.activRight}>
              <img
                src={dinerenImgs[dinerenImg]}
                alt="Activiteiten Steenwijk"
                className={stl.cycleImg}
              />
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Activiteiten;

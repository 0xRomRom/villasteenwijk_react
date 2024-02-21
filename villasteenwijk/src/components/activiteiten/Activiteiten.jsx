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
import Pic32 from "../../assets/dineren/2.webp";
import Pic33 from "../../assets/dineren/3.webp";
import Pic34 from "../../assets/dineren/4.webp";
import Pic35 from "../../assets/dineren/5.webp";
import Pic36 from "../../assets/dineren/6.webp";
import Pic37 from "../../assets/dineren/7.webp";
import Pic38 from "../../assets/dineren/8.webp";

const Activiteiten = ({ currentLanguage }) => {
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

  const dinerenImages = useMemo(
    () => [Pic31, Pic32, Pic33, Pic34, Pic35, Pic36, Pic37, Pic38],
    []
  );
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
          {currentLanguage === "Dutch" && "Activiteiten"}
          {currentLanguage === "German" && "Aktivitäten"}
          {currentLanguage === "Chinese" && "活动"}
          {currentLanguage === "English" && "Activities"}
          {currentLanguage === "Spanish" && "Actividades"}
        </m.h1>
        <div className={stl.ontDekDiv}>
          <m.h2
            className={stl.heroTxt}
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.25 }}
          >
            {currentLanguage === "Dutch" &&
              "Ontdek wat Steenwijk te bieden heeft"}
            {currentLanguage === "German" &&
              "Entdecken Sie, was Steenwijk zu bieten hat"}
            {currentLanguage === "Chinese" && "发现斯滕维克提供的内容"}
            {currentLanguage === "English" &&
              "Discover what Steenwijk has to offer"}
            {currentLanguage === "Spanish" &&
              "Descubra lo que Steenwijk tiene para ofrecer"}
          </m.h2>
        </div>
      </m.header>
      <div className={stl.contentWrap}>
        <m.div
          className={stl.contentTopBlock}
          initial={{ opacity: 0, y: "20px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={stl.chopperModal}>
            <div className={stl.innerChopperModal}>
              <h2>
                {currentLanguage === "Dutch" && "Huur een E-chopper"}
                {currentLanguage === "German" && "Mieten Sie einen E-Chopper"}
                {currentLanguage === "Chinese" && "租一辆电动摩托车"}
                {currentLanguage === "English" && "Rent an E-Chopper"}
                {currentLanguage === "Spanish" && "Alquilar una E-Chopper"}
              </h2>
              <div className={stl.conditionsList}>
                <span className={stl.conditionSpan}>
                  {currentLanguage === "Dutch" && "€35,- voor 4 uur"}
                  {currentLanguage === "German" && "€35,- für 4 Stunden"}
                  {currentLanguage === "Chinese" && "4小时35欧元"}
                  {currentLanguage === "English" && "€35,- for 4 hours"}
                  {currentLanguage === "Spanish" && "35€ por 4 horas"}
                </span>
                <span className={stl.conditionSpan}>
                  {currentLanguage === "Dutch" && "€50,- voor 1 dag"}
                  {currentLanguage === "German" && "€50,- für 1 Tag"}
                  {currentLanguage === "Chinese" && "一天50欧元"}
                  {currentLanguage === "English" && "€50,- per day"}
                  {currentLanguage === "Spanish" && "50€ por día"}
                </span>
                <span className={stl.conditionSpan}>
                  {currentLanguage === "Dutch" && "1 E-Chopper per persoon"}
                  {currentLanguage === "German" && "1 E-Chopper pro person"}
                  {currentLanguage === "Chinese" && "每人一辆E-Chopper"}
                  {currentLanguage === "English" && "1 E-Chopper per person"}
                  {currentLanguage === "Spanish" && "1 E-Chopper por persona"}
                </span>
                <span className={stl.conditionSpan}>
                  {currentLanguage === "Dutch" && "Max bereik: 40KM"}
                  {currentLanguage === "German" && "Maximale Reichweite: 40km"}
                  {currentLanguage === "Chinese" && "最大续航里程：40公里"}
                  {currentLanguage === "English" && "Max reach: 40km"}
                  {currentLanguage === "Spanish" && "Alcance máximo: 40 km"}
                </span>
                <button
                  className={stl.bookCta}
                  onClick={() => navigate("/contact")}
                >
                  {currentLanguage === "Dutch" && "Book"}
                  {currentLanguage === "German" && "Buch"}
                  {currentLanguage === "Chinese" && "预订"}
                  {currentLanguage === "English" && "Book"}
                  {currentLanguage === "Spanish" && "Libro"}
                </button>
              </div>
            </div>
          </div>
          <div className={stl.activiteitenModal}>
            <div className={stl.activLeft}>
              <h2 className={stl.acthero}>
                {currentLanguage === "Dutch" && "Activiteiten"}
                {currentLanguage === "German" && "Aktivitäten"}
                {currentLanguage === "Chinese" && "活动"}
                {currentLanguage === "English" && "Activities"}
                {currentLanguage === "Spanish" && "Actividades"}
              </h2>
              <ul className={stl.itemList}>
                <a
                  onMouseOver={() => newActiviteitenImg(0)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.hendrickdekeyser.nl/museumbezoek/villa-rams-woerthe-Steenwijk"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Villa Ramswoerthe"}
                    {currentLanguage === "German" && "Villa Ramswoerthe"}
                    {currentLanguage === "Chinese" && "Ramswoerthe 别墅"}
                    {currentLanguage === "English" && "Villa Ramswoerthe"}
                    {currentLanguage === "Spanish" && "Villa Ramswoerthe"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(1)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://rijksmonumenten.nl/monument/34576/grote-of-sint-clemenskerk/steenwijk/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />{" "}
                    {currentLanguage === "Dutch" && "Sint Clemenskerk"}
                    {currentLanguage === "German" && "Sint Clemens Kirche"}
                    {currentLanguage === "Chinese" && "圣克莱门斯教堂"}
                    {currentLanguage === "English" && "Sint Clemenschurch"}
                    {currentLanguage === "Spanish" && "Iglesia de Sint Clemens"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(2)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://rijksmonumenten.nl/monument/34599/kleine-of-onze-lieve-vrouwekerk/steenwijk/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />{" "}
                    {currentLanguage === "Dutch" && "Onze Lieve Vrouwekerk"}
                    {currentLanguage === "German" &&
                      "Kirche Unserer Lieben Frau"}
                    {currentLanguage === "Chinese" && "我们亲爱的夫人教堂"}
                    {currentLanguage === "English" && "Our dear lady church"}
                    {currentLanguage === "Spanish" &&
                      "Nuestra querida señora iglesia"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(3)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.taman-indonesia.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />{" "}
                    {currentLanguage === "Dutch" &&
                      "Dierenpark Taman Indonesia"}
                    {currentLanguage === "German" &&
                      "Tierpark Taman Indonesien"}
                    {currentLanguage === "Chinese" && "Taman 印度尼西亚动物园"}
                    {currentLanguage === "English" && "Zoo 'Taman Indonesia'"}
                    {currentLanguage === "Spanish" &&
                      "Zoológico Taman Indonesia"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(4)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.demeenthe.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Theater De Meenthe"}
                    {currentLanguage === "German" && "Theater De Meenthe"}
                    {currentLanguage === "Chinese" && "Meenthe 剧院"}
                    {currentLanguage === "English" && "Theather The Meenthe"}
                    {currentLanguage === "Spanish" && "Teatro El Meenthe"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(5)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.stadsmuseumsteenwijk.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Stadsmuseum"}
                    {currentLanguage === "German" && "Stadtmuseum"}
                    {currentLanguage === "Chinese" && "城市博物馆"}
                    {currentLanguage === "English" && "Citymuseum"}
                    {currentLanguage === "Spanish" && "Museo de la ciudad"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(6)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://klimbos-overijssel.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />{" "}
                    {currentLanguage === "Dutch" && "Klimbos Avontuurlijk"}
                    {currentLanguage === "German" &&
                      "Abenteuerlicher Kletterwald"}
                    {currentLanguage === "Chinese" && "冒险攀登森林"}
                    {currentLanguage === "English" &&
                      "Climbforrest 'Adventurous'"}
                    {currentLanguage === "Spanish" && "escalarforst aventurero"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newActiviteitenImg(7)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.stadsmuseumsteenwijk.nl/content/19-Stadswandeling-steenwijk.html?menu_parent=19"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />{" "}
                    {currentLanguage === "Dutch" &&
                      "Stadswandeling Steenwijk Vestingstad"}
                    {currentLanguage === "German" &&
                      "Stadtrundgang Steenwijk Festungsstadt"}
                    {currentLanguage === "Chinese" && "斯滕维克古城市漫步"}
                    {currentLanguage === "English" && "City walk"}
                    {currentLanguage === "Spanish" && "Paseo por la ciudad"}
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
        </m.div>
        <m.div
          className={stl.regioBlock}
          initial={{ opacity: 0, y: "20px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={stl.regioModal}>
            <div className={stl.regioLeft}>
              <h2 className={stl.regioHero}>
                {currentLanguage === "Dutch" && "In de regio"}
                {currentLanguage === "German" && "In der Region"}
                {currentLanguage === "Chinese" && "在该地区"}
                {currentLanguage === "English" && "In the region"}
                {currentLanguage === "Spanish" && "En la región"}
              </h2>
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
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Hunnebedden"}
                    {currentLanguage === "German" && "Hünengräber"}
                    {currentLanguage === "Chinese" && "史前石棺"}
                    {currentLanguage === "English" && "Dolmens"}
                    {currentLanguage === "Spanish" && "Dólmenes"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(2)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.staatsbosbeheer.nl/uit-in-de-natuur/locaties/weerribben"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Weerribben"}
                    {currentLanguage === "German" && "Weerribben"}
                    {currentLanguage === "Chinese" && "韦尔里本"}
                    {currentLanguage === "English" && "Weerribben"}
                    {currentLanguage === "Spanish" && "Weerribben"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(3)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mooisteroutes.nl/routes/95b1407/de-woldberg"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "De Woldberg"}
                    {currentLanguage === "German" && "De Woldberg"}
                    {currentLanguage === "Chinese" && "沃尔德贝格"}
                    {currentLanguage === "English" && "The Woldberg"}
                    {currentLanguage === "Spanish" && "El Woldberg"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(4)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.drenthe.nl/locaties/4274250260/tourist-info-havelte"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Havelte"}
                    {currentLanguage === "German" && "Havelte"}
                    {currentLanguage === "Chinese" && "哈费尔特"}
                    {currentLanguage === "English" && "Havelte"}
                    {currentLanguage === "Spanish" && "Havelte"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(5)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.orchideeenhoeve.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "De Orchideeën Hoeve"}
                    {currentLanguage === "German" && "Die Orchideenfarm"}
                    {currentLanguage === "Chinese" && "兰花农场"}
                    {currentLanguage === "English" && "The Orchids Farm"}
                    {currentLanguage === "Spanish" && "Granja de orquideas"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newRegioImg(6)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.friesland.nl/nl/locaties/4140876077/kasteel-old-stoutenburght"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Kasteel Old Stoutenburght"}
                    {currentLanguage === "German" &&
                      "Schloss Old Stoutenburght"}
                    {currentLanguage === "Chinese" && "Old Stoutenburght 城堡"}
                    {currentLanguage === "English" &&
                      "Castle Old Stoutenburght"}
                    {currentLanguage === "Spanish" &&
                      "Castillo vieja stoutenburght"}
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
        </m.div>

        <m.div
          className={stl.contentTopBlock}
          initial={{ opacity: 0, y: "20px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={stl.activiteitenModal}>
            <div className={stl.activLeft}>
              <h2 className={stl.acthero}>
                {currentLanguage === "Dutch" && "Dineren"}
                {currentLanguage === "German" && "Essen gehen"}
                {currentLanguage === "Chinese" && "用餐"}
                {currentLanguage === "English" && "Dining"}
                {currentLanguage === "Spanish" && "Comida"}
              </h2>
              <ul className={stl.itemList}>
                <a
                  onMouseOver={() => newDinerenImg(0)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.argentinotango.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Argentino Tango"}
                    {currentLanguage === "German" && "Argentinischer Tango"}
                    {currentLanguage === "Chinese" && "阿根廷探戈"}
                    {currentLanguage === "English" && "Argentino Tango"}
                    {currentLanguage === "Spanish" && "Argentino Tango"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(1)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.woodyshouse.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Woody's Steakhouse"}
                    {currentLanguage === "German" && "Woody's Steakhouse"}
                    {currentLanguage === "Chinese" && "伍迪牛排馆"}
                    {currentLanguage === "English" && "Woody's Steakhouse"}
                    {currentLanguage === "Spanish" && "Woody's Steakhouse"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(2)}
                  target="_blank"
                  rel="noreferrer"
                  href="http://www.hetsteakhouse.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Tennessee Steakhouse"}
                    {currentLanguage === "German" && "Tennessee Steakhouse"}
                    {currentLanguage === "Chinese" && "田纳西牛排馆"}
                    {currentLanguage === "English" && "Tennessee Steakhouse"}
                    {currentLanguage === "Spanish" && "Tennessee Steakhouse"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(3)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://restaurantdeopschepper.com/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Bistro De Opschepper"}
                    {currentLanguage === "German" && "Bistro De Opschepper"}
                    {currentLanguage === "Chinese" && "自夸小酒馆"}
                    {currentLanguage === "English" && "Bistro 'The Opschepper'"}
                    {currentLanguage === "Spanish" && "Bistró de fanfarronería"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(4)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.deherenvanderechter.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "De Heren van de Rechter"}
                    {currentLanguage === "German" && "Die Herren vom Richter"}
                    {currentLanguage === "Chinese" && "法官先生们"}
                    {currentLanguage === "English" && "De heren van de Rechter"}
                    {currentLanguage === "Spanish" && "Los caballeros del juez"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(5)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://brasseriezusenzo.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Brasserie Zus en Zo"}
                    {currentLanguage === "German" && "Brasserie Zus und So"}
                    {currentLanguage === "Chinese" && "Zus和 Zo 小酒馆"}
                    {currentLanguage === "English" && "Brasserie Zus en Zo"}
                    {currentLanguage === "Spanish" && "Brasserie Zus en Zo"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(6)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.bovenmeestersteenwijk.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Bovenmeester"}
                    {currentLanguage === "German" && "Bovenmeester"}
                    {currentLanguage === "Chinese" && "Bovenmeester"}
                    {currentLanguage === "English" && "Bovenmeester"}
                    {currentLanguage === "Spanish" && "Bovenmeester"}
                  </li>
                </a>
                <a
                  onMouseOver={() => newDinerenImg(7)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://rhodossteenwijk.nl/"
                >
                  <li className={stl.listItem}>
                    <IoIosArrowForward className={stl.arrow} />
                    {currentLanguage === "Dutch" && "Rhodos"}
                    {currentLanguage === "German" && "Rhodos"}
                    {currentLanguage === "Chinese" && "罗得岛"}
                    {currentLanguage === "English" && "Rhodos"}
                    {currentLanguage === "Spanish" && "Rhodos"}
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
          <div className={stl.linksModal}>
            <div className={stl.innerLinkModal}>
              <h2>
                {currentLanguage === "Dutch" && "Links"}
                {currentLanguage === "German" && "Links"}
                {currentLanguage === "Chinese" && "链接"}
                {currentLanguage === "English" && "Links"}
                {currentLanguage === "Spanish" && "Hipervínculos"}
              </h2>
              <div className={stl.linksList}>
                <div className={stl.innerWrap}>
                  <div className={stl.leftAlign}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.steenwijk.com/informatie/"
                    >
                      <span className={stl.linkSpan}>VVV Steenwijk</span>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="http://www.taxiooststeenwijk.nl/Home/"
                    >
                      <span className={stl.linkSpan}>
                        {currentLanguage === "Dutch" && "Taxi Oost"}
                        {currentLanguage === "German" && "Taxi Oost"}
                        {currentLanguage === "Chinese" && "东方出租车"}
                        {currentLanguage === "English" && "Taxi Oost"}
                        {currentLanguage === "Spanish" && "Taxi Oost"}
                      </span>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.toyota-vanderlinde.nl/over-ons/auto-huren-steenwijk/"
                    >
                      <span className={stl.linkSpan}>
                        {currentLanguage === "Dutch" && "Auto huren"}
                        {currentLanguage === "German" && "Auto mieten"}
                        {currentLanguage === "Chinese" && "租车"}
                        {currentLanguage === "English" && "Rent a car"}
                        {currentLanguage === "Spanish" && "Alquilar un coche"}
                      </span>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://rijwielshopsteenwijk.nl/verhuur/"
                    >
                      <span className={stl.linkSpan}>
                        {currentLanguage === "Dutch" && "Fiets huren"}
                        {currentLanguage === "German" && "Fahrrad mieten"}
                        {currentLanguage === "Chinese" && "租自行车"}
                        {currentLanguage === "English" && "Rent a bicycle"}
                        {currentLanguage === "Spanish" &&
                          "Alquilar una bicicleta"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Activiteiten;

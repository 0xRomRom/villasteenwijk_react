import stl from "./Omgeving.module.css";
import { motion as m } from "framer-motion";

const Omgeving = ({ currentLanguage }) => {
  return (
    <section className={stl.omgeving}>
      <m.h1
        className={stl.hero}
        initial={{ opacity: 0, x: "-30px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {currentLanguage === "Dutch" && "De kop van Overijssel"}
        {currentLanguage === "German" && "Der oberhaupt von Overijssel"}
        {currentLanguage === "Chinese" && "上艾瑟尔省的头"}
        {currentLanguage === "English" && "Head of Overijssel"}
      </m.h1>

      <div className={stl.nlwrap}>
        <m.div
          className={stl.innerKaartwrap}
          initial={{ opacity: 0, x: "30px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className={stl.pointer}></div>
          <img
            src="./omgeving/netherlands.svg"
            alt="Kaart van Nederland"
            style={{ zIndex: 2 }}
            className={stl.nlkaart}
          />
        </m.div>
      </div>
      <m.p
        className={stl.omgevingcopy}
        initial={{ opacity: 0, y: "-15px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 1.25 }}
      >
        {currentLanguage === "Dutch" &&
          "Onze prachtige stadsvilla is in 1905, in opdracht van Jan Hendrik Tromp Meesters (een rijke, Steenwijkse ondernemer en filantroop) gebouwd in de bekende Jugendstill stijl als zijnde wijkverpleging gebouw,hetgeen nog terug te zien is op de plaquette aan de voorkant van de villa. In “Het groene kruis gebouw” zoals de villa bij de Steenwijker in de volksmond genoemd wordt, zat vroeger een dokterspraktijk, kregen baby's hun inentingen en kwam men hierheen voor de sportkeuring."}
        {currentLanguage === "German" &&
          "Unsere wunderschöne Stadtvilla wurde 1905 im Auftrag von Jan Hendrik Tromp Meesters (einem wohlhabenden Unternehmer und Philanthrop aus Steenwijk) im bekannten Jugendstil als Gemeinschaftspflegegebäude erbaut, was noch heute auf der Gedenktafel an der Vorderseite zu sehen ist Villa „Das grüne Kreuzgebäude“, wie die Villa in der Nähe des Steenwijker im Volksmund genannt wird, beherbergte früher eine Arztpraxis, Babys wurden geimpft und die Leute kamen hierher, um Sportuntersuchungen durchzuführen."}
        {currentLanguage === "Chinese" &&
          "我们美丽的城市别墅建于 1905 年，由 Jan Hendrik Tromp Meesters（一位富有的斯廷韦克企业家和慈善家）委托建造，采用著名的新艺术风格作为社区护理建筑，至今仍可以在别墅前面的牌匾上看到。斯滕韦克附近的别墅俗称“绿十字大楼”，这里曾经是医生诊所、婴儿接种疫苗以及人们来这里进行体育检查的地方。"}
        {currentLanguage === "English" &&
          "Our beautiful city villa was built in 1905, commissioned by Jan Hendrik Tromp Meesters (a wealthy Steenwijk entrepreneur and philanthropist) in the well-known Art Nouveau style as a community nursing building, which can still be seen on the plaque at the front of the villa. In “The green cross building”, as the villa near the Steenwijker is popularly called, there used to be a doctor's practice, babies received their vaccinations and people came here for sports inspections."}
      </m.p>
    </section>
  );
};

export default Omgeving;

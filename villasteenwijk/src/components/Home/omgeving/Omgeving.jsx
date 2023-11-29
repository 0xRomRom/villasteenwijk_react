import stl from "./Omgeving.module.css";
import { motion as m } from "framer-motion";

const Omgeving = () => {
  return (
    <section className={stl.omgeving}>
      <m.h1
        className={stl.hero}
        initial={{ opacity: 0, x: "-30px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        De kop van Overijssel
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
      <p className={stl.omgevingcopy}>
        "Onze prachtige stadsvilla is in 1905, in opdracht van Jan Hendrik Tromp
        Meesters (een rijke, Steenwijkse ondernemer en filantroop) gebouwd in de
        bekende Jugendstill stijl als zijnde wijkverpleging gebouw,hetgeen nog
        terug te zien is op de plaquette aan de voorkant van de villa. In “Het
        groene kruis gebouw” zoals de villa bij de Steenwijker in de volksmond
        genoemd wordt, zat vroeger een dokterspraktijk, kregen baby's hun
        inentingen en kwam men hierheen voor de sportkeuring."
      </p>
    </section>
  );
};

export default Omgeving;

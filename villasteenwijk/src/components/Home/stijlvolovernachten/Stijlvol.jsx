import stl from "./Stijlvol.module.css";
import { motion as m } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Stijlvol = () => {
  const navigate = useNavigate();
  return (
    <section className={stl.stijlvol}>
      <m.h1
        className={stl.hero}
        initial={{ opacity: 0, x: "-30px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Stijlvol overnachten
      </m.h1>
      <div className={stl.contentWrap}>
        <m.p
          className={stl.copy}
          initial={{ opacity: 0, x: "-30px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Rick & Patrick heten u van harte welkom in Boutique hotel Villa
          Steenwyck.
          <br />
          <br /> Luxe, maar voordelig, overnachten kan in 1 van onze 4
          gloednieuwe kamers in het historische stadscentrum van het vestings
          stadje Steenwijk. <br />
          <br />
          Boutique hotel villa Steenwyck is geopend in januari 2023. Alles is
          splinternieuw en overal is aan gedacht; <br />
          <br /> Luxe grote “Van der Valk” Boxspring bedden van Swiss Sense,
          heerlijk wit, fris satijnen beddengoed en badtextiel van het beroemde
          merk “De Witte Lietaer” uit België en alle kamers zijn voorzien van
          Daikin warmtepomp airconditioners voor het milieu bewust koelen en
          verwarmen met ingebouwde flash-streamer luchtreiniging tegen stof,
          pollen, virussen, bacteriën en allergenen, Voor een altijd frisse
          “berglucht” in uw kamer. 80% van onze energie wordt opgewekt door onze
          zonnepanelen voor een zo milieu bewust mogelijk verblijf.
        </m.p>
        <div className={stl.imgWrap}>
          <m.img
            src="./home/Stijlvol.webp"
            alt="Kamer in Boutique Hotel Villa Steenwijk"
            className={stl.stijlvolImg}
            initial={{ opacity: 0, x: "30px" }}
            whileInView={{ opacity: 1, x: "0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <m.span
            onClick={() => navigate("/kamersprijzen")}
            className={stl.bekijkCta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Bekijk kamers <FaArrowRight className={stl.arrowRight} />
          </m.span>
        </div>
      </div>
    </section>
  );
};

export default Stijlvol;

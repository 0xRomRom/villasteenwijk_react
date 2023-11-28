import stl from "./Activiteiten.module.css";
import { motion as m } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";

//Kamer 1 Hildo Krop
const Activiteiten = () => {
  const navigate = useNavigate();
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
        <div className={stl.chopperModal}>
          <div className={stl.innerChopperModal}>
            <h2>Huur een E-Chopper</h2>
            <div className={stl.conditionsList}>
              <span className={stl.conditionSpan}>€35,- voor 4 uur</span>
              <span className={stl.conditionSpan}>€50,- voor 1 dag</span>
              <span className={stl.conditionSpan}>1 E-Chopper per persoon</span>
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
  );
};

export default Activiteiten;

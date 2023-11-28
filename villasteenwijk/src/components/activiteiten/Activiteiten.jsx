import stl from "./Activiteiten.module.css";
import { motion as m } from "framer-motion";

//Kamer 1 Hildo Krop
const Activiteiten = () => {
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
      <div className={stl.contentWrap}></div>
    </div>
  );
};

export default Activiteiten;

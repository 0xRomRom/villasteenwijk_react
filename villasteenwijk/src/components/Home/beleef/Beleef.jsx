import stl from "./Beleef.module.css";
import { motion as m } from "framer-motion";

const Beleef = () => {
  return (
    <section className={stl.beleef}>
      <div className={stl.wrapper}>
        <m.button
          className={stl.cta}
          initial={{ opacity: 0, y: "20px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.5 }}
        >
          Beleef het zelf
        </m.button>
        <m.img
          initial={{ opacity: 0, y: "-20px" }}
          whileInView={{ opacity: 0.2, y: "0px" }}
          transition={{ duration: 1.25 }}
          src="./Landing/2.webp"
          alt="Villa Boutique Hotel Steenwijk"
          className={stl.vilaBg}
        />
      </div>
    </section>
  );
};

export default Beleef;

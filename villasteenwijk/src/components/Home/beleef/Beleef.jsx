import stl from "./Beleef.module.css";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router";

const Beleef = ({ currentLanguage }) => {
  const navigate = useNavigate();
  return (
    <section className={stl.beleef}>
      <div className={stl.wrapper}>
        <m.button
          onClick={() => navigate("/housetour")}
          className={stl.cta}
          initial={{ opacity: 0, y: "20px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.5 }}
        >
          {currentLanguage === "Dutch" && "Beleef het zelf"}
          {currentLanguage === "German" && "Erleben Sie es selbst"}
          {currentLanguage === "Chinese" && "亲自体验一下"}
          {currentLanguage === "English" && "Explore yourself"}
        </m.button>
        <m.img
          initial={{ opacity: 0, y: "-20px" }}
          whileInView={{ opacity: 0.2, y: "0px" }}
          transition={{ duration: 1.25 }}
          src="./landing/2.webp"
          alt="Villa Boutique Hotel Steenwijk"
          className={stl.vilaBg}
        />
      </div>
    </section>
  );
};

export default Beleef;

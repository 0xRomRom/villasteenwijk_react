import stl from "./Footer.module.css";
import { motion as m } from "framer-motion";
import logo from "../../assets/icons/Logo.png";

const Footer = ({ currentLanguage }) => {
  const openExternalLink = () => {
    window.open(
      "https://www.booking.com/hotel/nl/villa-steenwyck.nl.html",
      "_blank"
    );
  };

  return (
    <footer className={stl.footer}>
      <m.img
        initial={{ opacity: 0, y: "-20px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 1.25 }}
        src={logo}
        alt="Villa Boutique Hotel Huismerk"
        className={stl.logo}
      />
      <span className={stl.reserveerCtaSpan} onClick={openExternalLink}>
        {currentLanguage === "Dutch" && "Reserveer"}
        {currentLanguage === "German" && "Buchen"}
        {currentLanguage === "Chinese" && "预订"}
      </span>
      <div className={stl.border}></div>
      <span className={stl.copyRight}>
        {currentLanguage === "Dutch" && "© 2024 Boutique Hotel Villa Steenwyck"}
        {currentLanguage === "German" &&
          "© 2024 Boutique-Hotel Villa Steenwyck"}
        {currentLanguage === "Chinese" && "© 2024 斯汀威克精品酒店"}
      </span>
    </footer>
  );
};

export default Footer;

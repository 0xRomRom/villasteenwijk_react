import stl from "./Footer.module.css";
import { motion as m } from "framer-motion";
import logo from "../../assets/icons/Logo.png";

const Footer = ({ currentLanguage }) => {
  const openExternalLink = () => {
    window.open(
      "https://ibe.smarthotel.nl/?id=bbcd1ebf-52ce-44d5-a248-01be65dfecd8",
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
        {currentLanguage === "English" && "Book"}
        {currentLanguage === "Spanish" && "Libro"}
      </span>
      <div className={stl.border}></div>
      <span className={stl.copyRight}>
        {currentLanguage === "Dutch" && "© 2024 Boutique Hotel Villa Steenwyck"}
        {currentLanguage === "German" &&
          "© 2024 Boutique-Hotel Villa Steenwyck"}
        {currentLanguage === "Chinese" && "© 2024 斯汀威克精品酒店"}
        {currentLanguage === "English" &&
          "© 2024 Boutique Hotel Villa Steenwyck"}
        {currentLanguage === "Spanish" &&
          "© 2024 Boutique Hotel Villa Steenwyck"}
      </span>
    </footer>
  );
};

export default Footer;

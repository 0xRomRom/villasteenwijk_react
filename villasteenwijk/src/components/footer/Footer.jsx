import stl from "./Footer.module.css";
import { motion as m } from "framer-motion";

const Footer = () => {
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
        src="./icons/logo.png"
        alt="Villa Boutique Hotel Huismerk"
        className={stl.logo}
      />
      <span className={stl.reserveerCtaSpan} onClick={openExternalLink}>
        Reserveer
      </span>
      <div className={stl.border}></div>
      <span className={stl.copyRight}>
        © 2023 Boutique Hotel Villa Steenwyck
      </span>
    </footer>
  );
};

export default Footer;

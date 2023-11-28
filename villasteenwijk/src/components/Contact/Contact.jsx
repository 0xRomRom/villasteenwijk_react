import stl from "./Contact.module.css";
import { motion as m } from "framer-motion";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/contact/ContactAnimation.json";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { GrDocumentStore } from "react-icons/gr";
import { GrMoney } from "react-icons/gr";

const Contact = () => {
  return (
    <main className={stl.kamersprijzen}>
      <m.h1
        className={stl.hero}
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1.25 }}
      >
        Contact
      </m.h1>
      <div className={stl.contactWrapper}>
        <div className={stl.wrapLeft}>
          <div className={stl.leftInnerWrap}>
            <div className={stl.infoList}>
              <span className={stl.listItem}>
                <FaPhone className={stl.miniIcon} /> +31 6 41 83 41 23
              </span>
              <span className={stl.listItem}>
                <MdAlternateEmail className={stl.miniIcon} />
                info@villasteenwyck.nl
              </span>
              <span className={stl.listItem}>
                <IoLocationSharp className={stl.miniIcon} /> Boutique Hotel
                Villa Steenwyck <br /> Meppelerweg 56 <br />
                8331 CX Steenwijk
              </span>
              <span className={stl.listItem}>
                <GrDocumentStore className={stl.miniIcon} />
                IBAN: NL 09ABNA 0117 2673 84 <br />
                BTW: NL001457001B09 <br />
                KvK: 08188678
              </span>
              <span className={stl.listItem}>
                <GrMoney className={stl.miniIcon} />
                Credit Card
                <br />
                Overschrijving
                <br />
                Contant
              </span>
            </div>
          </div>
        </div>
        <div className={stl.wrapRight}>
          <Lottie
            animationData={contactAnimation}
            className={stl.lottieAnimation}
          />
        </div>
      </div>
      <div className={stl.formWrapper}></div>
    </main>
  );
};

export default Contact;

import React, { useState, useRef } from "react";
import stl from "./Contact.module.css";
import { motion as m } from "framer-motion";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/contact/ContactAnimation.json";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { GrDocumentStore } from "react-icons/gr";
import { GrMoney } from "react-icons/gr";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const copyRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});
  const [emailSent, setEmailSent] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!nameRef.current.value.trim()) {
      errors.name = "Vul uw naam in";
    }

    if (!emailRef.current.value.trim()) {
      errors.email = "Ongeldig E-Mail adres";
    } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      errors.email = "Ongeldig E-Mail adres";
    }

    if (!copyRef.current.value.trim()) {
      errors.message = "Schrijf een bericht";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const message = copyRef.current.value;
      const email = emailRef.current.value;
      const name = nameRef.current.value;

      // The rest of your code for submitting the form

      const params = {
        from_name: name,
        reply_email: email,
        message: message,
      };
      // emailjs.send(
      //   "service_a939mwr",
      //   "template_zsbkdcj",
      //   params,
      //   "1ExHLcqOKMpwg2JF5"
      // );
      setEmailSent(true);
    }
  };

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
      <div className={stl.formWrapper}>
        {emailSent ? (
          "U hoort gauw van ons!"
        ) : (
          <div className={stl.formBg}>
            <form className={stl.contactForm}>
              <textarea
                className={stl.copyField}
                placeholder="Uw Bericht"
                ref={copyRef}
              ></textarea>
              {formErrors.message && (
                <p className={stl.error}>{formErrors.message}</p>
              )}

              <input
                type="text"
                className={stl.textInput}
                placeholder="Uw naam"
                ref={nameRef}
              />
              {formErrors.name && (
                <p className={stl.error}>{formErrors.name}</p>
              )}

              <input
                type="email"
                className={stl.textInput}
                placeholder="Uw E-Mail adres"
                ref={emailRef}
              />
              {formErrors.email && (
                <p className={stl.error}>{formErrors.email}</p>
              )}

              <button className={stl.ctaBtn} onClick={submitForm}>
                Verzenden
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default Contact;

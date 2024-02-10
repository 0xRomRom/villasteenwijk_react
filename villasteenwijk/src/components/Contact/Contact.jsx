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

const Contact = ({ currentLanguage }) => {
  const copyRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});
  const [emailSent, setEmailSent] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!nameRef.current.value.trim()) {
      if (currentLanguage === "Dutch") {
        errors.name = "Vul uw naam in";
      }
      if (currentLanguage === "German") {
        errors.name = "Gib deinen Namen ein";
      }
      if (currentLanguage === "Chinese") {
        errors.name = "输入你的名字";
      }
    }

    if (!emailRef.current.value.trim()) {
      if (currentLanguage === "Dutch") {
        errors.email = "Ongeldig E-Mail adres";
      }
      if (currentLanguage === "German") {
        errors.email = "Ungültige E-Mail-Adresse";
      }
      if (currentLanguage === "Chinese") {
        errors.email = "无效的邮件地址";
      }
    } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      if (currentLanguage === "Dutch") {
        errors.email = "Ongeldig E-Mail adres";
      }
      if (currentLanguage === "German") {
        errors.email = "Ungültige E-Mail-Adresse";
      }
      if (currentLanguage === "Chinese") {
        errors.email = "无效的邮件地址";
      }
    }

    if (!copyRef.current.value.trim()) {
      if (currentLanguage === "Dutch") {
        errors.message = "Schrijf een bericht";
      }
      if (currentLanguage === "German") {
        errors.message = "Nachricht schreiben";
      }
      if (currentLanguage === "Chinese") {
        errors.message = "写一个信息";
      }
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

      const params = {
        from_name: name,
        reply_email: email,
        message: message,
      };
      emailjs.send(
        "service_a939mwr",
        "template_zsbkdcj",
        params,
        "1ExHLcqOKMpwg2JF5"
      );
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
        {currentLanguage === "Dutch" && "Contact"}
        {currentLanguage === "German" && "Kontakt"}
        {currentLanguage === "Chinese" && "接触"}
      </m.h1>
      <div className={stl.contactWrapper}>
        <m.div
          className={stl.wrapLeft}
          initial={{ opacity: 0, x: "-20px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1 }}
        >
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
                {currentLanguage === "Dutch" && "Creditcard"}
                {currentLanguage === "German" && "Kreditkarte"}
                {currentLanguage === "Chinese" && "信用卡"}
                <br />
                {currentLanguage === "Dutch" && "Overschrijving"}
                {currentLanguage === "German" && "Überweisung"}
                {currentLanguage === "Chinese" && "转账"}
                <br />
                {currentLanguage === "Dutch" && "Contant"}
                {currentLanguage === "German" && "Barzahlung"}
                {currentLanguage === "Chinese" && "现金"}
              </span>
            </div>
          </div>
        </m.div>
        <m.div
          className={stl.wrapRight}
          initial={{ opacity: 0, x: "20px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1 }}
        >
          <Lottie
            animationData={contactAnimation}
            className={stl.lottieAnimation}
          />
        </m.div>
      </div>
      <m.div
        className={stl.formWrapper}
        initial={{ opacity: 0, y: "20px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 1 }}
      >
        {emailSent ? (
          "U hoort gauw van ons!"
        ) : (
          <div className={stl.formBg}>
            <form className={stl.contactForm}>
              {currentLanguage === "Dutch" && (
                <textarea
                  className={stl.copyField}
                  placeholder="Uw Bericht"
                  ref={copyRef}
                ></textarea>
              )}
              {currentLanguage === "German" && (
                <textarea
                  className={stl.copyField}
                  placeholder="Ihre Nachricht"
                  ref={copyRef}
                ></textarea>
              )}
              {currentLanguage === "Chinese" && (
                <textarea
                  className={stl.copyField}
                  placeholder="您的留言"
                  ref={copyRef}
                ></textarea>
              )}

              {formErrors.message && (
                <p className={stl.error}>{formErrors.message}</p>
              )}

              {currentLanguage === "Dutch" && (
                <input
                  type="text"
                  className={stl.textInput}
                  placeholder="Uw naam"
                  ref={nameRef}
                />
              )}
              {currentLanguage === "German" && (
                <input
                  type="text"
                  className={stl.textInput}
                  placeholder="Ihr Name"
                  ref={nameRef}
                />
              )}
              {currentLanguage === "Chinese" && (
                <input
                  type="text"
                  className={stl.textInput}
                  placeholder="你的名字"
                  ref={nameRef}
                />
              )}

              {formErrors.name && (
                <p className={stl.error}>{formErrors.name}</p>
              )}

              {currentLanguage === "Dutch" && (
                <input
                  type="email"
                  className={stl.textInput}
                  placeholder="Uw E-Mail adres"
                  ref={emailRef}
                />
              )}
              {currentLanguage === "German" && (
                <input
                  type="email"
                  className={stl.textInput}
                  placeholder="Ihre E-Mail-Adresse"
                  ref={emailRef}
                />
              )}
              {currentLanguage === "Chinese" && (
                <input
                  type="email"
                  className={stl.textInput}
                  placeholder="这里是电子邮件地址"
                  ref={emailRef}
                />
              )}

              {formErrors.email && (
                <p className={stl.error}>{formErrors.email}</p>
              )}

              <button className={stl.ctaBtn} onClick={submitForm}>
                {currentLanguage === "Dutch" && "Verzenden"}
                {currentLanguage === "German" && "Schicken"}
                {currentLanguage === "Chinese" && "发送"}
              </button>
            </form>
          </div>
        )}
      </m.div>
    </main>
  );
};

export default Contact;

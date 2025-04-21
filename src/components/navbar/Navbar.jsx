import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import stl from "./Navbar.module.css";
import logo from "../../assets/icons/Logo.png";

const Navbar = ({ setCurrentLanguage, currentLanguage }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navFolded, setNavFolded] = useState(false);

  const order1 = [
    {
      src: "./flags/NL.webp",
      alt: "Dutch flag",
      setLang: "Dutch",
    },
    {
      src: "./flags/German.png",
      alt: "German flag",
      setLang: "German",
    },
    {
      src: "./flags/China.png",
      alt: "Chinese flag",
      setLang: "Chinese",
    },
    {
      src: "./flags/UK.webp",
      alt: "English flag",
      setLang: "English",
    },
    {
      src: "./flags/Spain.webp",
      alt: "Spanish flag",
      setLang: "Spanish",
    },
  ];

  const order2 = [
    {
      src: "./flags/German.png",
      alt: "German flag",
      setLang: "German",
    },
    {
      src: "./flags/NL.webp",
      alt: "Dutch flag",
      setLang: "Dutch",
    },
    {
      src: "./flags/China.png",
      alt: "Chinese flag",
      setLang: "Chinese",
    },
    {
      src: "./flags/UK.webp",
      alt: "English flag",
      setLang: "English",
    },
    {
      src: "./flags/Spain.webp",
      alt: "Spanish flag",
      setLang: "Spanish",
    },
  ];

  const order3 = [
    {
      src: "./flags/China.png",
      alt: "Chinese flag",
      setLang: "Chinese",
    },
    {
      src: "./flags/NL.webp",
      alt: "Dutch flag",
      setLang: "Dutch",
    },
    {
      src: "./flags/German.png",
      alt: "German flag",
      setLang: "German",
    },
    {
      src: "./flags/UK.webp",
      alt: "English flag",
      setLang: "English",
    },
    {
      src: "./flags/Spain.webp",
      alt: "Spanish flag",
      setLang: "Spanish",
    },
  ];
  const order4 = [
    {
      src: "./flags/UK.webp",
      alt: "English flag",
      setLang: "English",
    },
    {
      src: "./flags/China.png",
      alt: "Chinese flag",
      setLang: "Chinese",
    },
    {
      src: "./flags/NL.webp",
      alt: "Dutch flag",
      setLang: "Dutch",
    },
    {
      src: "./flags/German.png",
      alt: "German flag",
      setLang: "German",
    },
    {
      src: "./flags/Spain.webp",
      alt: "Spanish flag",
      setLang: "Spanish",
    },
  ];
  const order5 = [
    {
      src: "./flags/Spain.webp",
      alt: "Spanish flag",
      setLang: "Spanish",
    },
    {
      src: "./flags/UK.webp",
      alt: "English flag",
      setLang: "English",
    },
    {
      src: "./flags/China.png",
      alt: "Chinese flag",
      setLang: "Chinese",
    },
    {
      src: "./flags/NL.webp",
      alt: "Dutch flag",
      setLang: "Dutch",
    },
    {
      src: "./flags/German.png",
      alt: "German flag",
      setLang: "German",
    },
  ];

  const handleNavigation = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMobileNav = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const handleLinkClick = useCallback(() => {
    openMobileNav();
  }, [openMobileNav]);

  const handleNewLanguage = (newLang) => {
    if (newLang === currentLanguage) return;
    setCurrentLanguage(newLang);
    setNavFolded(false);
  };

  return (
    <nav className={stl.navbar}>
      <img
        src={logo}
        alt="Legservice groen"
        className={stl.navlogo}
        onClick={handleNavigation}
      />
      <ul className={`${stl.navlist} ${mobileOpen ? stl.mobileNavOpen : ""}`}>
        <Link
          to="/"
          className={stl.links}
          onClick={handleLinkClick}
          exact="true"
        >
          <li className={stl.link}>
            {" "}
            {currentLanguage === "Dutch" && "Home"}
            {currentLanguage === "German" && "Home"}
            {currentLanguage === "Chinese" && "家"}
            {currentLanguage === "English" && "Home"}
            {currentLanguage === "Spanish" && "Hogar"}
          </li>
        </Link>

        <Link
          to="/kamersprijzen"
          className={stl.links}
          onClick={handleLinkClick}
        >
          <li className={stl.link}>
            {currentLanguage === "Dutch" && "Kamers & Prijzen"}
            {currentLanguage === "German" && "Zimmer & Preise"}
            {currentLanguage === "Chinese" && "房间及价格"}
            {currentLanguage === "English" && "Rooms & Prices"}
            {currentLanguage === "Spanish" && "Habitaciones y precios"}
          </li>
        </Link>

        <Link to="/fotos" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>
            {currentLanguage === "Dutch" && "Foto's"}
            {currentLanguage === "German" && "Fotos"}
            {currentLanguage === "Chinese" && "相片"}
            {currentLanguage === "English" && "Pictures"}
            {currentLanguage === "Spanish" && "Fotos"}
          </li>
        </Link>

        <Link to="/media" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>
            {currentLanguage === "Dutch" && "Media"}
            {currentLanguage === "German" && "Medien"}
            {currentLanguage === "Chinese" && "媒体"}
            {currentLanguage === "English" && "Media"}
            {currentLanguage === "Spanish" && "Medios"}
          </li>
        </Link>

        <Link to="/housetour" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>
            {currentLanguage === "Dutch" && "3D Virtuele Tour"}
            {currentLanguage === "German" && "Virtueller 3D-Rundgang"}
            {currentLanguage === "Chinese" && "3D虚拟游览"}
            {currentLanguage === "English" && "3D Virtual Tour"}
            {currentLanguage === "Spanish" && "Visita Virtual 3d"}
          </li>
        </Link>

        <Link
          to="/activiteiten"
          className={stl.links}
          onClick={handleLinkClick}
        >
          <li className={stl.link}>
            {currentLanguage === "Dutch" && "Activiteiten"}
            {currentLanguage === "German" && "Aktivitäten"}
            {currentLanguage === "Chinese" && "活动"}
            {currentLanguage === "English" && "Activities"}
            {currentLanguage === "Spanish" && "Actividades"}
          </li>
        </Link>

        <Link to="/contact" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>
            {currentLanguage === "Dutch" && "Contact"}
            {currentLanguage === "German" && "Kontakt"}
            {currentLanguage === "Chinese" && "接触"}
            {currentLanguage === "English" && "Contact"}
            {currentLanguage === "Spanish" && "Contacto"}
          </li>
        </Link>

        <a
          href="https://ibe.smarthotel.nl/?id=bbcd1ebf-52ce-44d5-a248-01be65dfecd8"
          className={stl.links}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          <li className={`${stl.link} ${stl.reserveren}`}>
            {currentLanguage === "Dutch" && "Reserveren"}
            {currentLanguage === "German" && "Buchen"}
            {currentLanguage === "Chinese" && "预订"}
            {currentLanguage === "English" && "Book"}
            {currentLanguage === "Spanish" && "Libro"}
          </li>
        </a>
      </ul>
      <div
        className={`${stl.hamburger} ${mobileOpen ? stl.active : ""}`}
        onClick={handleLinkClick}
      >
        <span className={stl.bar}></span>
        <span className={stl.bar}></span>
        <span className={stl.bar}></span>
      </div>

      <div className={stl.langWrap}>
        <span className={stl.choose}>
          Choose
          <br /> Language:
        </span>
        <div
          className={stl.languageDropdown}
          style={{
            backgroundColor: navFolded ? "rgb(42, 42, 42)" : "",
            top: navFolded ? "4.75rem" : "0rem",
          }}
          onClick={() => setNavFolded(!navFolded)}
        >
          {currentLanguage === "Dutch" && (
            <>
              {navFolded
                ? order1.map((item) => (
                    <div
                      className={stl.flag}
                      onClick={() => handleNewLanguage(item.setLang)}
                      key={item.setLang}
                    >
                      <img
                        src={item.src}
                        alt={item.atl}
                        className={stl.flagIcon}
                      />
                      <span className={stl.languageTitle}>{item.setLang}</span>
                    </div>
                  ))
                : order1.slice(0, 1).map((item) => (
                    <div
                      className={stl.flag}
                      onClick={() => handleNewLanguage(item.setLang)}
                      key={item.setLang}
                    >
                      <img
                        src={item.src}
                        alt={item.atl}
                        className={stl.flagIcon}
                      />
                      <span className={stl.languageTitle}>{item.setLang}</span>
                    </div>
                  ))}
            </>
          )}
          {currentLanguage === "German" && (
            <>
              {navFolded
                ? order2.map((item) => (
                    <div
                      className={stl.flag}
                      onClick={() => handleNewLanguage(item.setLang)}
                      key={item.setLang}
                    >
                      <img
                        src={item.src}
                        alt={item.atl}
                        className={stl.flagIcon}
                      />
                      <span className={stl.languageTitle}>{item.setLang}</span>
                    </div>
                  ))
                : order2.slice(0, 1).map((item) => (
                    <div
                      className={stl.flag}
                      onClick={() => handleNewLanguage(item.setLang)}
                      key={item.setLang}
                    >
                      <img
                        src={item.src}
                        alt={item.atl}
                        className={stl.flagIcon}
                      />
                      <span className={stl.languageTitle}>{item.setLang}</span>
                    </div>
                  ))}
            </>
          )}
          {currentLanguage === "Chinese" && (
            <>
              {navFolded
                ? order3.map((item) => (
                    <div
                      className={stl.flag}
                      onClick={() => handleNewLanguage(item.setLang)}
                      key={item.setLang}
                    >
                      <img
                        src={item.src}
                        alt={item.atl}
                        className={stl.flagIcon}
                      />
                      <span className={stl.languageTitle}>{item.setLang}</span>
                    </div>
                  ))
                : order3.slice(0, 1).map((item) => (
                    <div
                      className={stl.flag}
                      onClick={() => handleNewLanguage(item.setLang)}
                      key={item.setLang}
                    >
                      <img
                        src={item.src}
                        alt={item.atl}
                        className={stl.flagIcon}
                      />
                      <span className={stl.languageTitle}>{item.setLang}</span>
                    </div>
                  ))}
            </>
          )}
          {currentLanguage === "English" && (
            <>
              {navFolded
                ? order4.map((item) => (
                    <div
                      className={stl.flag}
                      onClick={() => handleNewLanguage(item.setLang)}
                      key={item.setLang}
                    >
                      <img
                        src={item.src}
                        alt={item.atl}
                        className={stl.flagIcon}
                      />
                      <span className={stl.languageTitle}>{item.setLang}</span>
                    </div>
                  ))
                : order4.slice(0, 1).map((item) => (
                    <div
                      className={stl.flag}
                      onClick={() => handleNewLanguage(item.setLang)}
                      key={item.setLang}
                    >
                      <img
                        src={item.src}
                        alt={item.atl}
                        className={stl.flagIcon}
                      />
                      <span className={stl.languageTitle}>{item.setLang}</span>
                    </div>
                  ))}
            </>
          )}
          {currentLanguage === "Spanish" && (
            <>
              {navFolded
                ? order5.map((item) => (
                    <div
                      className={stl.flag}
                      onClick={() => handleNewLanguage(item.setLang)}
                      key={item.setLang}
                    >
                      <img
                        src={item.src}
                        alt={item.atl}
                        className={stl.flagIcon}
                      />
                      <span className={stl.languageTitle}>{item.setLang}</span>
                    </div>
                  ))
                : order5.slice(0, 1).map((item) => (
                    <div
                      className={stl.flag}
                      onClick={() => handleNewLanguage(item.setLang)}
                      key={item.setLang}
                    >
                      <img
                        src={item.src}
                        alt={item.atl}
                        className={stl.flagIcon}
                      />
                      <span className={stl.languageTitle}>{item.setLang}</span>
                    </div>
                  ))}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

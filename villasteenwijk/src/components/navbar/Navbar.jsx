import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import stl from "./Navbar.module.css";
import logo from "../../assets/icons/Logo.png";

const languages = {};

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
          </li>
        </Link>

        <Link to="/fotos" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>
            {currentLanguage === "Dutch" && "Foto's"}
            {currentLanguage === "German" && "Fotos"}
            {currentLanguage === "Chinese" && "相片"}
          </li>
        </Link>

        <Link to="/media" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>
            {currentLanguage === "Dutch" && "Media"}
            {currentLanguage === "German" && "Medien"}
            {currentLanguage === "Chinese" && "媒体"}
          </li>
        </Link>

        <Link to="/housetour" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>
            {currentLanguage === "Dutch" && "3D Virtuele Tour"}
            {currentLanguage === "German" && "Virtueller 3D-Rundgang"}
            {currentLanguage === "Chinese" && "3D虚拟游览"}
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
          </li>
        </Link>

        <Link to="/contact" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>
            {currentLanguage === "Dutch" && "Contact"}
            {currentLanguage === "German" && "Kontakt"}
            {currentLanguage === "Chinese" && "接触"}
          </li>
        </Link>

        <a
          href="https://www.booking.com/hotel/nl/villa-steenwyck.nl.html"
          className={stl.links}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          <li className={`${stl.link} ${stl.reserveren}`}>
            {currentLanguage === "Dutch" && "Reserveren"}
            {currentLanguage === "German" && "Buchen"}
            {currentLanguage === "Chinese" && "预订"}
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

      <div
        className={stl.languageDropdown}
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
      </div>
    </nav>
  );
};

export default Navbar;

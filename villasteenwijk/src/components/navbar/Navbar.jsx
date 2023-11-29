import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import stl from "./Navbar.module.css";
import logo from "../../assets/icons/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMobileNav = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const handleLinkClick = useCallback(() => {
    openMobileNav();
  }, [openMobileNav]);

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
          <li className={stl.link}>Home</li>
        </Link>

        <Link
          to="/kamersprijzen"
          className={stl.links}
          onClick={handleLinkClick}
        >
          <li className={stl.link}>Kamers & Prijzen</li>
        </Link>

        <Link to="/fotos" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>Foto's</li>
        </Link>

        <Link to="/media" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>Media</li>
        </Link>

        <Link to="/housetour" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>3D Virtuele Tour</li>
        </Link>

        <Link
          to="/activiteiten"
          className={stl.links}
          onClick={handleLinkClick}
        >
          <li className={stl.link}>Activiteiten</li>
        </Link>

        <Link to="/contact" className={stl.links} onClick={handleLinkClick}>
          <li className={stl.link}>Contact</li>
        </Link>

        <a
          href="https://www.booking.com/hotel/nl/villa-steenwyck.nl.html"
          className={stl.links}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          <li className={`${stl.link} ${stl.reserveren}`}>Reserveren</li>
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
    </nav>
  );
};

export default Navbar;

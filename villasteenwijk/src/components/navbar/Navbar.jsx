import stl from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setActivePage, activePage }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.navbarLocation) {
      localStorage.setItem("navbarLocation", "home");
    }
  }, []);

  const tabSwitcher = (newTab) => {
    setActivePage(newTab);
    localStorage.setItem("navbarLocation", newTab);
  };

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <nav className={stl.navbar}>
      <img
        src="./icons/Logo.png"
        alt="Legservice groen"
        className={stl.navlogo}
        onClick={handleNavigation}
      />
      <ul className={stl.navlist}>
        <Link to="/" className={stl.links} onClick={() => tabSwitcher("home")}>
          <li
            className={`${stl.link} ${activePage === "home" ? stl.active : ""}`}
          >
            Home
          </li>
        </Link>

        <Link
          to="/kamersprijzen"
          className={stl.links}
          onClick={() => tabSwitcher("kamersprijzen")}
        >
          <li
            className={`${stl.link} ${
              activePage === "kamersprijzen" ? stl.active : ""
            }`}
          >
            Kamers & Prijzen
          </li>
        </Link>

        <Link
          to="/fotos"
          className={stl.links}
          onClick={() => tabSwitcher("fotos")}
        >
          <li
            className={`${stl.link} ${
              activePage === "fotos" ? stl.active : ""
            }`}
          >
            Foto's
          </li>
        </Link>

        <Link
          to="/media"
          className={stl.links}
          onClick={() => tabSwitcher("media")}
        >
          <li
            className={`${stl.link} ${
              activePage === "media" ? stl.active : ""
            }`}
          >
            Media
          </li>
        </Link>

        <Link
          to="/3dtour"
          className={stl.links}
          onClick={() => tabSwitcher("3dtour")}
        >
          <li
            className={`${stl.link} ${
              activePage === "3dtour" ? stl.active : ""
            }`}
          >
            3D Virtuele Tour
          </li>
        </Link>

        <Link
          to="/activiteiten"
          className={stl.links}
          onClick={() => tabSwitcher("activiteiten")}
        >
          <li
            className={`${stl.link} ${
              activePage === "activiteiten" ? stl.active : ""
            }`}
          >
            Activiteiten
          </li>
        </Link>

        <Link
          to="/contact"
          className={stl.links}
          onClick={() => tabSwitcher("contact")}
        >
          <li
            className={`${stl.link} ${
              activePage === "contact" ? stl.active : ""
            }`}
          >
            Contact
          </li>
        </Link>
        <Link
          to="https://www.booking.com/hotel/nl/villa-steenwyck.nl.html"
          className={stl.links}
          target="_blank"
        >
          <li
            className={`${stl.link} ${
              activePage === "contact" ? stl.active : ""
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

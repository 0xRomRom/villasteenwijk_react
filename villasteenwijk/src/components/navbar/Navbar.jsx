import stl from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setActivePage, activePage }) => {
  const navigate = useNavigate();

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
        <Link to="/" className={stl.links}>
          <li className={stl.link}>Home</li>
        </Link>

        <Link to="/kamersprijzen" className={stl.links}>
          <li className={stl.link}>Kamers & Prijzen</li>
        </Link>

        <Link to="/fotos" className={stl.links}>
          <li className={stl.link}>Foto's</li>
        </Link>

        <Link to="/media" className={stl.links}>
          <li className={stl.link}>Media</li>
        </Link>

        <Link to="/3dtour" className={stl.links}>
          <li className={stl.link}>3D Virtuele Tour</li>
        </Link>

        <Link to="/activiteiten" className={stl.links}>
          <li className={stl.link}>Activiteiten</li>
        </Link>

        <Link to="/contact" className={stl.links}>
          <li className={stl.link}>Contact</li>
        </Link>
        <Link
          to="https://www.booking.com/hotel/nl/villa-steenwyck.nl.html"
          className={stl.links}
          target="_blank"
        >
          <li
            className={`${stl.link} ${stl.reserveren} 
              
            `}
          >
            Reserveren
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/fox-logo-lt_blue.svg";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand d-flex align-items-center ms-5"
          to="/"
          onClick={closeMenu}
        >
          <img src={logo} alt="Logo" className="me-2" />
          {!isHome && <h2 className="text-white m-0 ms-2">Brook Brown</h2>}
        </NavLink>

        <button
          className="navbar-toggler text-white me-4 "
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse mt-3 ${isOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item me-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link p-0 ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                <h5 className="text-lt-blue m-0">Home</h5>
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `nav-link p-0 ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                <h5 className="text-white m-0">Gallery</h5>
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link p-0 ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                <h5 className="text-white m-0">About Me</h5>
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link p-0 ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                <h5 className="text-white m-0">Contact</h5>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ zIndex: 10 }}
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
}

export default Header;

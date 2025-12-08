import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/fox-logo-lt_blue.svg"

function Header() {
  const location = useLocation()
  const isHome = location.pathname === "/"
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
            {location.pathname !== "/" && <span className="brand-text ms-2">Brook Brown</span>}
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gallery" className="nav-link" onClick={closeMenu}>
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </>
  )
}

export default Header

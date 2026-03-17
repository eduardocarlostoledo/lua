import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../src/styles/Navbar.css";
import logo from "../images/logo.png";
import { AppContext } from "../context/AppContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  const { t } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleAnchorClick = (event, targetId) => {
    event.preventDefault();
    scrollToSection(targetId);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        <Link className="navbar__brand" to="/" onClick={() => setMenuOpen(false)}>
          <img
            loading="lazy"
            src={logo}
            alt="LUA Collection"
            className="navbar__logo"
          />
          <div className="navbar__titles">
            <span className="navbar__title">LUA COLLECTION</span>
            <span className="navbar__subtitle">Boutique · Encarnación</span>
          </div>
        </Link>

        <button
          className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__menu ${menuOpen ? "is-open" : ""}`}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            {t("nav.home")}
          </NavLink>
          <a href="/#novedades" onClick={(e) => handleAnchorClick(e, "novedades")}> {t("nav.drops")} </a>
          <a href="/#como-comprar" onClick={(e) => handleAnchorClick(e, "como-comprar")}> {t("nav.buy")} </a>
          <a href="/#vip" onClick={(e) => handleAnchorClick(e, "vip")}> {t("nav.vip")} </a>
          <a href="/#ubicacion" onClick={(e) => handleAnchorClick(e, "ubicacion")}> {t("nav.location")} </a>
          <NavLink to="/quienes-somos" className={({ isActive }) => (isActive ? "active" : "")}>
            {t("nav.about")}
          </NavLink>
          <a
            href="https://api.whatsapp.com/send?phone=595984366660"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.contact")}
          </a>

          <div className="navbar__actions">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;

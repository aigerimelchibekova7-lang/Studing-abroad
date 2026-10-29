import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { language, changeLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <header className="header">
      <div className="head container">
        <Link to="/" className="logo" onClick={closeMenu}>
          EDIVIA
          <small>EDUCATION • FUTURE</small>
        </Link>
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`header-content ${menuOpen ? "menu-open" : ""}`}>
          <nav className="links" id="main-navigation">
            <Link
              to="/"
              className={isActive("/")}
              onClick={closeMenu}
            >
              {t.home}
            </Link>

            <Link
              to="/countries"
              className={isActive("/countries")}
              onClick={closeMenu}
            >
              {t.countries}
            </Link>

            <Link
              to="/universities"
              className={isActive("/universities")}
              onClick={closeMenu}
            >
              {t.universities}
            </Link>

            <Link
              to="/contact"
              className={isActive("/contact")}
              onClick={closeMenu}
            >
              {t.contact}
            </Link>

            <Link
              to="/about"
              className={isActive("/about")}
              onClick={closeMenu}
            >
              {t.about}
            </Link>

            <Link
              to="/favorites"
              className={`mobile-favorites ${isActive("/favorites")}`}
              onClick={closeMenu}
            >
              ♡{" "}
              {language === "kg"
                ? "Тандалгандар"
                : language === "en"
                ? "Favorites"
                : "Избранное"}
            </Link>
          </nav>

          <div className="header-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Change theme"
              title="Change theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* LANGUAGE */}
            <div className="language-switcher">
              <button
                className={language === "kg" ? "active" : ""}
                onClick={() => changeLanguage("kg")}
                aria-pressed={language === "kg"}
              >
                KG
              </button>

              <button
                className={language === "en" ? "active" : ""}
                onClick={() => changeLanguage("en")}
                aria-pressed={language === "en"}
              >
                EN
              </button>

              <button
                className={language === "ru" ? "active" : ""}
                onClick={() => changeLanguage("ru")}
                aria-pressed={language === "ru"}
              >
                RU
              </button>
            </div>

            {/* START JOURNEY */}
            <Link
              to="/how-to-apply"
              className="how-btn"
              onClick={closeMenu}
            >
              <span>{t.startJourney}</span>
              <span aria-hidden="true"> →</span>
            </Link>

            <Link
              to="/favorites"
              className="favorites-link"
              onClick={closeMenu}
            >
              ♡{" "}
              {language === "kg"
                ? "Тандалгандар"
                : language === "en"
                ? "Favorites"
                : "Избранное"}
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
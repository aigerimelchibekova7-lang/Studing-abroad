import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { language, changeLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="head container">
        <Link to="/" className="logo">
          EDIVIA
          <small>EDUCATION • FUTURE</small>
        </Link>

        <nav className="links">
          <Link to="/">{t.home}</Link>
          <Link to="/countries">{t.countries}</Link>
          <Link to="/universities">{t.universities}</Link>
          <Link to="/contact">{t.contact}</Link>
          <Link to="/about">{t.about}</Link>
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

          {/* Тил алмаштыруучу баскычтар */}
          <div className="language-switcher">
            <button
              className={language === "kg" ? "active" : ""}
              onClick={() => changeLanguage("kg")}
            >
              KG
            </button>

            <button
              className={language === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>

            <button
              className={language === "ru" ? "active" : ""}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
          </div>

          <Link to="/how-to-apply" className="how-btn">
            <span>{t.startJourney}</span>
          </Link>
        </div>

        <Link to="/favorites" className="favorites-link">
          ♡{" "}
          {language === "kg"
            ? "Тандалгандар"
            : language === "en"
            ? "Favorites"
            : "Избранное"}
        </Link>
      </div>
    </header>
  );
};

export default Header;
import React from "react";
import "./Footer.css";
import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footers">
      <div className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">
              <h2>EDIVIA</h2>
              <span>EDUCATION • FUTURE</span>
            </div>

            <div className="footer-column">
              <h3>{t.footerNavigation}</h3>
              <a href="/">{t.footerHome}</a>
              <a href="/countries">{t.footerCountries}</a>
              <a href="/universities">{t.footerUniversities}</a>
              <a href="/about">{t.footerAbout}</a>
            </div>

            <div className="footer-column">
              <h3>{t.footerHelp}</h3>
              <a href="/how-to-apply">{t.footerHowToApply}</a>
              <a href="/contact">{t.footerContacts}</a>
            </div>

            <div className="footer-column contact-column">
              <h3>{t.footerContact}</h3>
              <p>☎️ +996 700 000 000</p>
              <p>✉️ edivia@gmail.com</p>
              <p>📍 Бишкек, Кыргызстан</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2026 EDIVIA. {t.footerRights}
            </p>

            <div className="footer-socials"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  
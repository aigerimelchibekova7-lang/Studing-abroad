import React from "react";
import "./Footer.css";

const Footer = () => {
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
            <h3>Навигация</h3>
            <a href="/">Главная</a>
            <a href="/countries">Страны</a>
            <a href="/universities">Университеты</a>
            <a href="/about">О нас</a>
          </div>
          <div className="footer-column">
            <h3>Помощь</h3>
            <a href="/how-to-apply">Как поступить</a>
            <a href="/contact">Контакты</a>
          </div>
          <div className="footer-column contact-column">
            <h3>Связаться с нами</h3>
            <p>☎️ +996 700 000 000</p>
            <p>✉️ edivia@gmail.com</p>
            <p>📍 Бишкек. Кыргызстан</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 EDIVIA. Все права защищены.</p>
          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
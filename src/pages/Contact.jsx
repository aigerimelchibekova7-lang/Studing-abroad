import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset()
  };

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-text">
          <span>КОНТАКТЫ</span>
          <h1>Свяжитесь с нами</h1>
          <p>У вас есть вопросы? Мы всегда рядом чтобы помочь вам сделать первый шаг к учёбе за границей.</p>
          <div className="contact-benefits">
            <div><b>◷</b><p>Быстрый<br />ответ</p></div>
            <div><b>♙</b><p>Индивидуальный<br />подход</p></div>
            <div><b>♡</b><p>Полная<br />поддержка</p></div></div>
            </div>
        <div className="contact-hero-image">
          <img src="/Concantfoto.jpeg" alt="" />
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Наши контакты</h2>
          <div className="info-item">
            <span>☎️</span>
            <div>
              <h4>Телефон</h4>
              <p>+996 700 000 000</p>
            </div>
          </div>
          <div className="info-item">
            <span>✉️</span>
            <div>
              <h4>Email</h4>
              <p>info@edivia.com</p>
            </div>
          </div>

          <div className="info-item">
            <span>📍</span>
            <div>
              <h4>Адрес</h4>
              <p>г. Бишкек, ул. Киевская 148</p>
              <p>Торгово-развлекательный центр, 4 этаж</p>
            </div>
          </div>
          <div className="info-item">
            <span>🕐</span>
            <div>
              <h4>Время работы</h4>
              <p>Пн – Пт: 09:00 – 18:00</p>
              <p>Сб – Вс: по предварительной записи</p>
            </div>
          </div>
         </div>
        <div className="contact-form">
          <h2>Напишите нам</h2>
          <p className="form-description">Оставьте свои данные, и мы свяжемся с вами в ближайшее время.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Ваше имя *</label>
                <input type="text" placeholder="ФИО" required/>
              </div>

              <div className="form-group">
                <label>Телефон *</label>
                <input
                  type="tel"
                  placeholder="Номер телефон"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="example@gmail.com" required/>
              </div>
              <div className="form-group">
                <label>Выберите страну</label>
                <select>
                  <option>Не выбрано</option>
                  <option>Саудовская Аравия</option>
                  <option>Южная Корея</option>
                  <option>Германия</option>
                  <option>Италия</option>
                  <option>Турция</option>
                  <option>Китай</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Ваше сообщение *</label>
              <textarea placeholder="Напишите, что вас интересует..."required></textarea>
            </div>
            <button type="submit">
              Отправить сообщение →
            </button>
          </form>
          {sent && (
            <div className="success-message">
              ✅ Спасибо! Ваше сообщение отправлено.
              Мы свяжемся с вами в ближайшее время.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
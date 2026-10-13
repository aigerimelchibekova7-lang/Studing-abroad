import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import "./Contact.css";

const Contact = () => { 
const [sent, setSent] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const application = {
    full_name: formData.get("full_name").trim(),
    phone: formData.get("phone").trim(),
    email: formData.get("email").trim(),
    country: formData.get("country"),
    message: formData.get("message").trim(),
  };

  setLoading(true);
  setSent(false);
  setError("");

  try {
    const { error } = await supabase
      .from("Contact")
      .insert([application]);

    if (error) {
      throw error;
    }

    setSent(true);
    form.reset();
  } catch (err) {
    console.error("Supabase катасы:", err);
    setError(err.message || "Маалымат жөнөтүлгөн жок.");
  } finally {
    setLoading(false);
  }
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
       <p className="form-description">
       Оставьте свои данные, и мы свяжемся с вами в ближайшее время.</p>
  <form onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="form-group">
        <label>Ваше имя *</label>
        <input
          type="text"
          name="full_name"
          placeholder="ФИО"
          required/>
      </div>
      <div className="form-group">
        <label>Телефон *</label>
        <input
          type="tel"
          name="phone"
          placeholder="Номер телефона"
          required/>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required/>
      </div>
      <div className="form-group">
        <label>Выберите страну *</label>
        <select name="country" defaultValue="" required>
          <option value="" disabled>
            Выберите страну
          </option>
          <option value="Саудовская Аравия">Саудовская Аравия</option>
          <option value="Южная Корея">Южная Корея</option>
          <option value="Германия">Германия</option>
          <option value="Италия">Италия</option>
          <option value="Турция">Турция</option>
          <option value="Китай">Китай</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label>Ваше сообщение *</label>
      <textarea
        name="message"
        placeholder="Напишите, что вас интересует..."
        required
      />
    </div>

    <button type="submit" disabled={loading}>
      {loading ? "Отправка..." : "Отправить сообщение →"}
    </button>
  </form>

  {sent && (
    <div className="success-message">
      ✅ Спасибо! Ваше сообщение успешно отправлено.
      Мы свяжемся с вами в ближайшее время.
    </div>
  )}

  {error && (
    <div className="error-message" role="alert">
      ❌ {error}
    </div>
  )}
</div>
</div>
</section>
);
};

export default Contact;

import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useLanguage } from "../components/LanguageContext";
import "./Contact.css";

const Contact = () => { 
  const { language }= useLanguage();
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
const translations = {
  kg: {
    contacts: "Биздин байланыштар",
    phone: "Телефон",
    email: "Электрондук почта",
    address: "Дарек",
    location: "Бишкек ш., Киев көчөсү, 148",
    building: "Соода жана көңүл ачуу борбору, 4-кабат",
    workingHours: "Иш убактысы",
    weekdays: "Дш – Жм: 09:00 – 18:00",
    weekends: "Иш–Жш: эс алуу",
    writeUs: "Бизге жазыңыз",
    description:
      "Маалыматтарыңызды калтырыңыз, биз сиз менен жакын арада байланышабыз.",
    yourName: "Атыңыз *",
    fullName: "Аты-жөнүңүз",
    phoneNumber: "Телефон номери",
    chooseCountry: "Өлкөнү тандаңыз *",
    countryPlaceholder: "Өлкөнү тандаңыз",
    message: "Билдирүүңүз *",
    messagePlaceholder: "Сизди эмне кызыктырарын жазыңыз...",
    sending: "Жөнөтүлүүдө...",
    send: "Билдирүү жөнөтүү →",
    success:
      "Рахмат! Билдирүүңүз ийгиликтүү жөнөтүлдү. Жакын арада сиз менен байланышабыз.",
    sendError: "Маалымат жөнөтүлгөн жок.",
    countries: [
      "Сауд Арабиясы",
      "Түштүк Корея",
      "Германия",
      "Италия",
      "Түркия",
      "Кытай",
    ],
  },

  en: {
    contacts: "Our Contacts",
    phone: "Phone",
    email: "Email",
    address: "Address",
    location: "148 Kiev Street, Bishkek",
    building: "Shopping and entertainment center, 4th floor",
    workingHours: "Working Hours",
    weekdays: "Mon – Fri: 09:00 – 18:00",
    weekends: "Sat – Sun: Closed",
    writeUs: "Contact Us",
    description:
      "Leave your details, and we will contact you as soon as possible.",
    yourName: "Your Name *",
    fullName: "Full name",
    phoneNumber: "Phone number",
    chooseCountry: "Choose a Country *",
    countryPlaceholder: "Choose a country",
    message: "Your Message *",
    messagePlaceholder: "Tell us what you are interested in...",
    sending: "Sending...",
    send: "Send Message →",
    success:
      "Thank you! Your message has been sent successfully. We will contact you soon.",
    sendError: "Failed to send your information.",
    countries: [
      "Saudi Arabia",
      "South Korea",
      "Germany",
      "Italy",
      "Turkey",
      "China",
    ],
  },

  ru: {
    contacts: "Наши контакты",
    phone: "Телефон",
    email: "Электронная почта",
    address: "Адрес",
    location: "г. Бишкек, ул. Киевская, 148",
    building: "Торгово-развлекательный центр, 4 этаж",
    workingHours: "Время работы",
    weekdays: "Пн – Пт: 09:00 – 18:00",
    weekends: "Сб – Вс: выходной",
    writeUs: "Напишите нам",
    description:
      "Оставьте свои данные, и мы свяжемся с вами в ближайшее время.",
    yourName: "Ваше имя *",
    fullName: "ФИО",
    phoneNumber: "Номер телефона",
    chooseCountry: "Выберите страну *",
    countryPlaceholder: "Выберите страну",
    message: "Ваше сообщение *",
    messagePlaceholder: "Напишите, что вас интересует...",
    sending: "Отправка...",
    send: "Отправить сообщение →",
    success:
      "Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
    sendError: "Не удалось отправить данные.",
    countries: [
      "Саудовская Аравия",
      "Южная Корея",
      "Германия",
      "Италия",
      "Турция",
      "Китай",
    ],
  },
};

const t = translations[language] || translations.ru;


  return (
    <section className="contact-page">
      <div className="contact-content">
        <div className="contact-info">
          <h2>{t.contacts}</h2>
          <div className="info-item">
            <span>☎️</span>
            <div>
              <h4>{t.phone}</h4>
              <p>+996 700 000 000</p>
            </div>
          </div>
          <div className="info-item">
            <span>✉️</span>
            <div>
              <h4>{t.email}</h4>
              <p>info@edivia.com</p>
            </div>
          </div>
          <div className="info-item">
            <span>📍</span>
            <div>
              <h4>{t.adress}</h4>
              <p>{t.location}</p>
              <p>{t.building}</p>
            </div>
          </div>
          <div className="info-item">
            <span>🕐</span>
            <div>
              <h4>{t.workingHours}</h4>
              <p>{t.weekdays}</p>
              <p>{t.weekends}</p>
            </div>
          </div>
         </div>       
        <div className="contact-form">
       <h2>{t.writeUs}</h2>
       <p className="form-description">
       {t.description}</p>
  <form onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="form-group">
        <label>Ваше имя *</label>
        <input
          type="text"
          name="full_name"
          placeholder={t.fullName}
          required/>
      </div>
      <div className="form-group">
        <label>{t.phone}</label>
        <input
          type="tel"
          name="phone"
          placeholder={t.phoneNumber}
          required/>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label>{t.email}</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required/>
      </div>
      <div className="form-group">
        <label>{t.chooseCountry}</label>
        <select name="country" defaultValue="" required>
          <option value="" disabled>
            {t.countryPlaceholder}
          </option>
          <option value="Саудовская Аравия">{t.countries[0]}</option>
          <option value="Южная Корея">{t.countries[1]}</option>
          <option value="Германия">{t.countries[2]}</option>
          <option value="Италия">{t.countries[3]}</option>
          <option value="Турция">{t.countries[4]}</option>
          <option value="Китай">{t.countries[5]}</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label>{t.message}</label>
      <textarea
        name="message"
        placeholder={t.messagePlaceholder}
        required
      />
    </div>

    <button type="submit" disabled={loading}>
      {loading ? t.sending :t.send}
    </button>
  </form>

  {sent && (
    <div className="success-message">
      {t.success}
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

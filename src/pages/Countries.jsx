import React, { useState } from "react";
import "./Countries.css";

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    {
      id: "1",
      flag: "🇸🇦",
      name: "Саудовская Аравия",
      description:"Современная страна с богатой культурой и большими возможностями для образования.",
      directions: ["Медицина", "Инженерия", "Бизнес", "IT и технологии"],
      cost: "от $3,000 в год",
    },

    {
      id: "2",
      flag: "🇰🇷",
      name: "Южная Корея",
      description: "Страна современных технологий, сильных университетов и инновационного образования.",
      directions: ["IT", "Медицина", "Бизнес", "Дизайн"],
      cost: "от $3,500 в год",
    },

    {
      id: "3",
      flag: "🇩🇪",
      name: "Германия",
      description:
        "Качественное европейское образование и множество возможностей для студентов.",
      directions: ["Инженерия", "Медицина", "Экономика", "IT"],
      cost: "от €1,000 в год",
    },

    {
      id: "4",
      flag: "🇮🇹",
      name: "Италия",
      description:"Страна искусства, архитектуры, дизайна и вдохновения.",
      directions: ["Дизайн", "Архитектура", "Мода", "Бизнес"],
      cost: "от €1,000 в год",
    },

    {
      id: "5",
      flag: "🇹🇷",
      name: "Турция",
      description:"Доступное образование, интересная культура и современные университеты.",
      directions: ["Медицина", "Инженерия", "Бизнес", "IT"],
      cost: "от $2,000 в год",
    },

    {
      id: "6",
      flag: "🇨🇳",
      name: "Китай",
      description:"Быстро развивающаяся страна с современными университетами и технологиями.",
      directions: ["IT", "Бизнес", "Медицина", "Языки"],
      cost: "от $2,500 в год",
    },
  ];

  return (
    <main className="countries-page">
      <section className="countries-hero">
        <span>EDIVIA • СТРАНЫ</span>
        <h1> Выберите страну<br />для обучения</h1>
        <p>6 стран — тысячи возможностей.<br />Найдите направление, которое подходит именно вам.</p>
      </section>
      <section className="countries-section">
        <div className="countries-grid">
          {countries.map((country) => (
            <div className="countries-card" key={country.id}>
              <div className="countries-flag">
                {country.flag}
              </div>
              <h2>{country.name}</h2>
              <p>{country.description}</p>
              <div className="countries-directions">
                {country.directions.map((direction) => (
                  <span key={direction}>
                    {direction}
                  </span>
                ))}
              </div>
              <button
                className="details-btn"
                onClick={() => setSelectedCountry(country)}
              >
                Подробнее 
              </button>
            </div>
          ))}
        </div>
      </section>
      {selectedCountry && (
     <div className="modal"
          onClick={() => setSelectedCountry(null)}
        >
          <div className="countries-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedCountry(null)}
            >
              ×
            </button>
            <div className="modal-flag">
              {selectedCountry.flag}
            </div>
            <h2> {selectedCountry.name}</h2>
            <p>{selectedCountry.description}</p>
            <h3>Популярные направления</h3>
            <div className="modal-directions">
              {selectedCountry.directions.map((direction) => (
                <span key={direction}>
                  ✦ {direction}
                </span>
              ))}
            </div>
            <div className="modal-cost">
              💰 Стоимость обучения:{" "}
              {selectedCountry.cost}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Countries;
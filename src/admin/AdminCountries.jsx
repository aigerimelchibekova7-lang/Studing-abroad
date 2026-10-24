import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUniversities } from "../UniversitiesStorage";
import "./AdminCountries.css";

function AdminCountries() {
  const [universities] = useState(() => getUniversities());

  const countries = [
    { name: "Арабия", flag: "🇸🇦", city: "Эр-Рияд" },
    { name: "Южная Корея", flag: "🇰🇷", city: "Сеул" },
    { name: "Германия", flag: "🇩🇪", city: "Берлин" },
    { name: "Италия", flag: "🇮🇹", city: "Рим" },
    { name: "Турция", flag: "🇹🇷", city: "Стамбул" },
    { name: "Китай", flag: "🇨🇳", city: "Пекин" },
  ];

  const totalCountries = new Set(
    universities.map((university) => university.country)
  ).size;

  return (
    <div className="admin-countries">
      <div className="admin-countries-header">
        <div>
          <h1>Страны</h1>
          <p>Управление странами для обучения за рубежом</p>
        </div>

        <Link to="/countries" className="admin-countries-site-btn">
          Посмотреть на сайте ↗
        </Link>
      </div>

      <div className="admin-countries-stats">
        <div className="admin-countries-stat">
          <span>Стран в проекте</span>
          <strong>{totalCountries}</strong>
        </div>

        <div className="admin-countries-stat">
          <span>Всего университетов</span>
          <strong>{universities.length}</strong>
        </div>
      </div>

      <div className="admin-countries-list">
        <div className="admin-countries-list-header">
          <h2>Список стран</h2>
          <span>{countries.length} стран</span>
        </div>

        <div className="admin-countries-grid">
          {countries.map((country) => {
            const universityCount = universities.filter(
              (university) => university.country === country.name
            ).length;

            return (
              <div
                className="admin-country-card"
                key={country.name}
              >
                <div className="admin-country-card-top">
                  <span className="admin-country-flag">
                    {country.flag}
                  </span>

                  <span className="admin-country-status">
                    Активна
                  </span>
                </div>

                <h3>{country.name}</h3>

                <p className="admin-country-city">
                  Основной город: {country.city}
                </p>

                <div className="admin-country-card-bottom">
                  <span>Университеты</span>
                  <strong>{universityCount}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminCountries;
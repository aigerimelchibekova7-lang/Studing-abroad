import React, { useState } from "react";
import "./Countries.css";
import { useLanguage } from "../components/LanguageContext";

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { t } = useLanguage();

  const countries = [
    {
      id: "1",
      flag: "🇸🇦",
      nameKey: "saudiArabia",
      descriptionKey: "saudiArabiaDesc",
      directionsKey: "saudiArabiaDirections",
      costKey: "saudiArabiaCost",
    },
    {
      id: "2",
      flag: "🇰🇷",
      nameKey: "southKorea",
      descriptionKey: "southKoreaDesc",
      directionsKey: "southKoreaDirections",
      costKey: "southKoreaCost",
    },
    {
      id: "3",
      flag: "🇩🇪",
      nameKey: "germany",
      descriptionKey: "germanyDesc",
      directionsKey: "germanyDirections",
      costKey: "germanyCost",
    },
    {
      id: "4",
      flag: "🇮🇹",
      nameKey: "italy",
      descriptionKey: "italyDesc",
      directionsKey: "italyDirections",
      costKey: "italyCost",
    },
    {
      id: "5",
      flag: "🇹🇷",
      nameKey: "turkey",
      descriptionKey: "turkeyDesc",
      directionsKey: "turkeyDirections",
      costKey: "turkeyCost",
    },
    {
      id: "6",
      flag: "🇨🇳",
      nameKey: "china",
      descriptionKey: "chinaDesc",
      directionsKey: "chinaDirections",
      costKey: "chinaCost",
    },
  ];

  return (
    <main className="countries-page">
      <section className="countries-hero">
        <span>{t.countriesHeroLabel}</span>
        <h1>{t.countriesHeroTitle}</h1>
        <p>{t.countriesHeroText}</p>
      </section>

      <section className="countries-section">
        <div className="countries-grid">
          {countries.map((country) => (
            <div className="countries-card" key={country.id}>
              <div className="countries-card-top">
                <div className="countries-flag">
                  {country.flag}
                </div>
              </div>

              <h2>{t[country.nameKey]}</h2>

              <p>{t[country.descriptionKey]}</p>

              <div className="countries-directions">
                {t[country.directionsKey].map((direction) => (
                  <span key={direction}>{direction}</span>
                ))}
              </div>

              <button
                className="details-btn"
                onClick={() => setSelectedCountry(country)}
              >
                {t.details}
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedCountry && (
        <div
          className="modal"
          onClick={() => setSelectedCountry(null)}
        >
          <div
            className="countries-modal"
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

            <h2>{t[selectedCountry.nameKey]}</h2>

            <p>{t[selectedCountry.descriptionKey]}</p>

            <h3>{t.popularDirections}</h3>

            <div className="modal-directions">
              {t[selectedCountry.directionsKey].map((direction) => (
                <span key={direction}>✦ {direction}</span>
              ))}
            </div>

            <div className="modal-cost">
              {t.tuitionCost}{" "}
              {t[selectedCountry.costKey]}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Countries;       
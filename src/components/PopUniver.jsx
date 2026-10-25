import React from "react";
import "./PopUniver.css";
import { useLanguage } from "./LanguageContext";

const univer = [
  {
    countryKey: "arabia",
    descriptionKey: "arabiaDesc",
    image: "/Arabia.jpeg",
  },
  {
    countryKey: "korea",
    descriptionKey: "koreaDesc",
    image: "/Korea.jpeg",
  },
  {
    countryKey: "germany",
    descriptionKey: "germanyDesc",
    image: "/Germany.jpeg",
  },
  {
    countryKey: "turkey",
    descriptionKey: "turkeyDesc",
    image: "/Turkey.jpeg",
  },
  {
    countryKey: "china",
    descriptionKey: "chinaDesc",
    image: "/Kitai.jpeg",
  },
  {
    countryKey: "italy",
    descriptionKey: "italyDesc",
    image: "/Italia.jpeg",
  },
];

function PopUniver() {
  const { t } = useLanguage();

  return (
    <section className="popuniver">
      <div className="popuniver-container">
        <div className="popuniver-name">
          <span>{t.popularLabel}</span>
          <h1>{t.popularTitle}</h1>
          <p>{t.popularText}</p>
        </div>

        <div className="country-grid">
          {univer.map((item) => (
            <div className="country-card" key={item.countryKey}>
              <img
                src={item.image}
                alt={t[item.countryKey]}
              />

              <div className="country-info">
                <h3>{t[item.countryKey]}</h3>
                <p>{t[item.descriptionKey]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopUniver;   
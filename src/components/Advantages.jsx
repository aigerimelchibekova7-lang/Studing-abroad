import React from "react";
import "./Advantages.css";
import { useLanguage } from "./LanguageContext";

const Advantages = () => {
  const { t } = useLanguage();

  return (
    <section className="advantage">
      <div className="advantages">
        <div className="title">
          <p>{t.advantagesTitle}</p>
          <h2>{t.advantagesSubtitle}</h2>
        </div>

        <div className="cards">
          <div className="card">
            <div className="icon">🎓</div>
            <h3>{t.advantage1Title}</h3>
            <p>{t.advantage1Text}</p>
          </div>

          <div className="card">
            <div className="icon">🌎</div>
            <h3>{t.advantage2Title}</h3>
            <p>{t.advantage2Text}</p>
          </div>

          <div className="card">
            <div className="icon">💬</div>
            <h3>{t.advantage3Title}</h3>
            <p>{t.advantage3Text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
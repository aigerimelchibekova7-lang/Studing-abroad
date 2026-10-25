import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="heros">
      <div className="hero">
        <div className="content">
          <p className="title">EDIVIA - EDUCATION & FUTURE</p>

          <h1>{t.heroTitle}</h1>

          <p className="text">{t.heroText}</p>

          <div className="buttons">
            <Link to="/universities">
              <button>{t.chooseUniversity}</button>
            </Link>
          </div>

          <div className="stats">
            <div className="stat">
              <h3>50+</h3>
              <p>{t.universitiesCount}</p>
            </div>

            <div className="stat">
              <h3>6+</h3>
              <p>{t.countriesCount}</p>
            </div>

            <div className="stat">
              <h3>100+</h3>
              <p>{t.studentsCount}</p>
            </div>
          </div>
        </div>

        <div className="image">
          <img src="/girl.png" alt="Student" />
        </div>
      </div>
    </section>
  );
};

export default Hero;                            
import React from "react";
import "./StudentStories.css";
import { useLanguage } from "./LanguageContext";

const stories = [
  {
    name: "Алина",
    country: "Южная Корея",
    image: "/Girls.png",
    textKey: "alinaText",
    flag: "🇰🇷",
  },
  {
    name: "Ильяс",
    country: "Германия",    
    image: "/Boy.png",
    textKey: "ilyasText",
    flag: "🇩🇪",
  },
  {
    name: "Айдана",
    country: "Турция",
    image: "/Girls2.png",
    textKey: "aidanaText",
    flag: "🇹🇷",
  },
];

const countryTranslations = {
  kg: ["Түштүк Корея", "Германия", "Түркия"],
  en: ["South Korea", "Germany", "Turkey"],
  ru: ["Южная Корея", "Германия", "Турция"],
};

function StudentStories() {
  const { t, language } = useLanguage();

  return (
    <section className="student">
      <div className="student-container">
        <div className="heading">
          <span>{t.storiesLabel}</span>

          <h2>{t.storiesTitle}</h2>

          <p>{t.storiesDescription}</p>
        </div>

        <div className="student-cards">
          {stories.map((story, index) => (
            <article className="story-card" key={story.name}>
              <img src={story.image} alt={story.name} />

              <div className="story">
                <h3>{story.name}</h3>

                <p className="story-country">
                  {story.flag}{" "}
                  {countryTranslations[language][index]}
                </p>

                <p className="story-text">
                  {t[story.textKey]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentStories;  
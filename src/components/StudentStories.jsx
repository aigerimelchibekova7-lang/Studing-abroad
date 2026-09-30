import React from "react";
import "./StudentStories.css";

const stories = [
  {
    name: "Алина",
    country: "Южная Корея",
    // flag: "🇰🇷",
    image: "/Girls.png",
    text: "Мне хотелось учиться в стране, где развиваются технологии. Я начала с выбора университета и постепенно разобралась с требованиями.",
  },
  {
    name: "Ильяс",
    country: "Германия",
    // flag: "🇩🇪",
    image: "/Boy.png",
    text: "Сначала поступление казалось сложным. Когда я разделил всё на этапы, стало намного понятнее.",
  },
  {
    name: "Айдана",
    country: "Турция",
    // flag: "🇹🇷",
    image: "/Girls2.png",
    text: "Я хотела получить международное образование и одновременно познакомиться с новой культурой.",
  },
];

function StudentStories() {
  return (
    <section className="student">
      <div className="student-container">
        <div className="heading">
          <span>ИСТОРИИ СТУДЕНТОВ</span>
          <h2>Мечты становятся реальностью</h2>
          <p> Узнай, как студенты выбирали страну, университет и начинали свой путь к международному образованию.</p>
        </div>
        <div className="student-cards">
          {stories.map((story, index) => (
            <article className="story-card" key={index}>
              <img src={story.image} alt={story.name} />
              <div className="story">
                <h3>{story.name}</h3>
                <p className="story-country">
                  {story.flag} {story.country}
                </p>
                <p className="story-text">
                  {story.text}
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

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { universities } from "./Universities";
import "./UniversityDetails.css";

export default function UniversityDetails() {
  const { slug } = useParams();

  const university = universities.find((item) => {
    const itemSlug = item.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    return itemSlug === slug;
  });

  const images = university
    ? university.images?.length
      ? university.images
      : [university.image]
    : [];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [slug]);

  useEffect(() => {
    if (images.length < 2) return;

    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slug, images.length]);

  if (!university) {
    return (
      <main className="university-not-found">
        <h1>Университет не найден</h1>
        <Link to="/universities">
          ← Вернуться к университетам
        </Link>
      </main>
    );
  }

  return (
    <main className="university-details">
      <div className="university-details-container">
        <Link to="/universities" className="university-back">
          ← Все университеты
        </Link>

        <section className="university-gallery">
          <img
            key={images[activeImage]}
            src={images[activeImage]}
            alt={university.name}
            className="university-gallery-image"
          />

          <div className="university-gallery-overlay">
            <span>
              {university.flag} {university.country}
            </span>
            <h1>{university.name}</h1>
            <p>📍 {university.city}</p>
          </div>

          {images.length > 1 && (
            <>
              <button
                className="gallery-arrow gallery-prev"
                onClick={() =>
                  setActiveImage(
                    (activeImage - 1 + images.length) % images.length
                  )
                }
                aria-label="Предыдущее фото"
              >
                ‹
              </button>

              <button
                className="gallery-arrow gallery-next"
                onClick={() =>
                  setActiveImage((activeImage + 1) % images.length)
                }
                aria-label="Следующее фото"
              >
                ›
              </button>

              <div className="gallery-dots">
                {images.map((image, index) => (
                  <button
                    key={image + index}
                    className={`gallery-dot ${
                      index === activeImage ? "active" : ""
                    }`}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Фото ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </section>

        <section className="university-content-section">
          <p className="university-eyebrow">
            EDIVIA · EDUCATION • FUTURE</p>
          <h2>Об университете</h2>
          <p>{university.description}</p>
          <div className="university-info-grid">
            <article className="university-info-card">
              <span>🎓</span>
              <h3>Стоимость обучения</h3>
              <p>
                {university.tuition || "Уточняется"}
              </p>
            </article>
            <article className="university-info-card">
              <span>🏠</span>
              <h3>Проживание</h3>
              <p>{university.accommodation || "Информация уточняется"}</p>
            </article>
            <article className="university-info-card">
              <span>🌐</span>
              <h3>Язык обучения</h3>
              <p> {university.language || "Информация уточняется"}</p>
            </article>
            <article className="university-info-card">
              <span>⏳</span>
              <h3>Продолжительность обучения</h3>
              <p>{university.duration || "Зависит от программы"}</p>
            </article>
          </div>

          <h2>📚 Направления обучения</h2>
          <div className="university-programs">
            {university.fields?.map((field) => (
              <div className="university-program" key={field}>
                ✦ {field}
              </div>
            ))}
          </div>
          <h2>📄 Требования для поступления</h2>
          <ul className="university-requirements">
            {university.requirements?.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>

          <h2>💰 Основные расходы</h2>
          <ul className="university-requirements">
            {university.expenses?.map((expense) => (
              <li key={expense}>{expense}</li>
            ))}
          </ul>

          <div className="university-cta">
            <div>
              <h2>Начни своё будущее здесь!</h2>
              <p>
                Свяжись с EDIVIA, чтобы узнать больше о поступлении
                в этот университет.
              </p>
            </div>

            <Link
              to="/contact"
              state={{ university: university.name }}
              className="university-apply-button"
            >
              Хочу поступить →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

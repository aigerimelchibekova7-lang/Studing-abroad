import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { universities } from "./Universities";
import { useLanguage } from "../components/LanguageContext";
import "./UniversityDetails.css";
import { UniversityTranslations } from "../components/UniversityTranslations";

export default function UniversityDetails() {
  const { slug } = useParams();
  const { t, language }=useLanguage();

  const university = universities.find((item) => {
    const itemSlug = item.name
  .toLowerCase()
  .trim()
  .replace(/\s+/g, "-")
  .replace(/[^\p{L}\p{N}-]/gu, "")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "");

    return itemSlug === slug;
  });
  const translatedUniversity =
  university
    ? UniversityTranslations[university.name]?.[language]
    : undefined;

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
        <h1>{t.universityNotFound}</h1>

        <Link to="/universities">
          {t.backToUniversities}
        </Link>
      </main>
    );
  }

  return (
    <main className="university-details">
      <div className="university-details-container">
        <Link to="/universities" className="university-back">
          {t.backToUniversities}
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

            <p>📍 {translatedUniversity.city || university.city}</p>
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
                aria-label={t.previousPhoto}
              >
                ‹
              </button>

              <button
                className="gallery-arrow gallery-next"
                onClick={() =>
                  setActiveImage((activeImage + 1) % images.length)
                }
                aria-label={t.nextPhoto}
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
                    aria-label={`${index + 1}` }
                  />
                ))}
              </div>
            </>
          )}
        </section>

        <section className="university-content-section">
          <p className="university-eyebrow">
            EDIVIA · EDUCATION • FUTURE
          </p>

          <h2>{t.aboutUniversity}</h2>

          <p>{translatedUniversity?.description || university.description}</p>

          <div className="university-info-grid">
            <article className="university-info-card">
              <span>🎓</span>
              <h3>{t.tuitionLabel}</h3>
              <p>{ translatedUniversity?.tuition || university.tuition || t.tuitionUnknown}</p>
            </article>

            <article className="university-info-card">
              <span>🏠</span>
              <h3>{t.accommodationLabel}</h3>
              <p>
                { translatedUniversity?.accommodation || university.accommodation || t.accommodationUnknown}
              </p>
            </article>

            <article className="university-info-card">
              <span>🌐</span>
              <h3>{t.languageLabel}</h3>
              <p>
                { translatedUniversity?.language || university.language || t.accommodationUnknown}
              </p>
            </article>

            <article className="university-info-card">
              <span>⏳</span>
              <h3>{t.durationLabel}</h3>
              <p>
                { translatedUniversity?.duration || university.duration || t.durationUnknown}
              </p>
            </article>
          </div>

          <h2>📚 {t.studyFields}</h2>

          <div className="university-programs">
            {( translatedUniversity?.fields || university.fields)?.map((field) => (
              <div className="university-program" key={field}>
                ✦ {field}
              </div>
            ))}
          </div>

          <h2>📄 {t.admissionRequirements}</h2>

          <ul className="university-requirements">
            {( translatedUniversity?.requirements || university.requirements)?.map((requirement, index) => (
              <li key={`${requirement}-${index}`}>
                {requirement}
              </li>
            ))}
          </ul>

          <h2>💰 {t.mainExpenses}</h2>

          <ul className="university-requirements">
            {(translatedUniversity?.expenses || university.expenses)?.map((expense, index) => (
              <li key={`${expense}-${index}`}>
                {expense}
              </li>
            ))}
          </ul>

          <div className="university-cta">
            <div>
              <h2>{t.universityCtaTitle}</h2>

              <p>{t.universityCtaText}</p>
            </div>

            <Link
              to="/contact"
              state={{ university: university.name }}
              className="university-apply-button"
            >
              {t.applyButton} →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
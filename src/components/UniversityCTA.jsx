// Тапшыргын келеби
import { Link } from "react-router-dom";

function UniversityCTA({ university, t }) {
  return (
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
  );
}

export default UniversityCTA;

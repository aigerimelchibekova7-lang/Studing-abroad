
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useLanguage } from "../components/LanguageContext";
import { UniversityTranslations } from "../components/UniversityTranslations";

import { getUniversities, createUniversitySlug } from "../services/universitiesApi";

import UniversityGallery from "../components/UniversityGallery";
import UniversityInfo from "../components/UniversityInfo";
import RequirementsList from "../components/RequirementsList";
import ExpensesList from "../components/ExpensesList";
import Breadcrumbs from "../components/Breadcrumbs";
import StudyFields from "../components/StudyFields";
import UniversityCTA from "../components/UniversityCTA";

import "./UniversityDetails.css";

export default function UniversityDetails() {
  const { slug } = useParams();
  const { t, language } = useLanguage();

  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeImage, setActiveImage] = useState(0);

  // Университеттерди Supabase'ден жүктөө
  useEffect(() => {
    let isMounted = true;

    const loadUniversities = async () => {
      try {
        const data = await getUniversities();
        console.log("Supabase университеттери:", data);
        console.log("URL slug:", slug);

        if (isMounted) {
          setUniversities(data);
        }
      } catch (err) {
        console.error("Университетти жүктөө катасы:", err);

        if (isMounted) {
          setError(
            "Университеттин маалыматын жүктөө мүмкүн болгон жок."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadUniversities();

    return () => {
      isMounted = false;
    };
  }, []);

  // URL slug аркылуу университетти табуу
  const university = universities.find(
    (item) => createUniversitySlug(item.name) === slug
  );

  // Университеттин котормосун алуу
  const translatedUniversity = university
    ? UniversityTranslations[university.name]?.[language]
    : undefined;

  // Университеттин сүрөттөрүн алуу
  const images = university
    ? university.images?.length
      ? university.images
      : university.image
      ? [university.image]
      : []
    : [];

  // Баштапкы сүрөткө кайтаруу
  useEffect(() => {
    setActiveImage(0);
  }, [slug]);

  // Сүрөттөрдү автоматтык алмаштыруу
  useEffect(() => {
    if (images.length < 2) return;

    const timer = setInterval(() => {
      setActiveImage(
        (current) => (current + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [slug, images.length]);

 
   if (loading) {
  return (
    <main className="university-not-found">
      <h2>Жүктөлүүдө...</h2>
    </main>
  );
}

  // Ката чыккан учурда
  if (error) {
    return (
      <main className="university-not-found">
        <h2>{error}</h2>

        <Link to="/universities">
          {t.backToUniversities}
        </Link>
      </main>
    );
  }

  // Университет табылбаса
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

  // Негизги барак
  return (
    <main className="university-details">
      <div className="university-details-container">

        {/* Навигация */}
        <Breadcrumbs
          items={[
            {
              label: t.backToUniversities,
              to: "/universities",
            },
            {
              label: university.name,
            },
          ]}
        />

        {/* Сүрөттөр галереясы */}
        <UniversityGallery
          images={images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          university={{
            ...university,
            city: translatedUniversity?.city || university.city,
          }}
          t={t}
        />

        <section className="university-content-section">

          {/* Университет жөнүндө */}
          <p className="university-eyebrow">
            EDIVIA · EDUCATION • FUTURE
          </p>

          <h2>{t.aboutUniversity}</h2>

          <p>
            {translatedUniversity?.description ||
              university.description}
          </p>

          {/* Негизги маалыматтар */}
          <UniversityInfo
            university={university}
            translatedUniversity={translatedUniversity}
            t={t}
          />

          {/* Адистиктер */}
          <StudyFields
            fields={
              translatedUniversity?.fields ||
              university.fields
            }
            t={t}
          />

          {/* Кабыл алуу талаптары */}
          <RequirementsList
            requirements={
              translatedUniversity?.requirements ||
              university.requirements
            }
            t={t}
          />

          {/* Негизги чыгымдар */}
          <ExpensesList
            expenses={
              translatedUniversity?.expenses ||
              university.expenses
            }
            t={t}
          />

          {/* Окууга тапшыруу */}
          <UniversityCTA
            university={university}
            t={t}
          />

        </section>
      </div>
    </main>
  );
}

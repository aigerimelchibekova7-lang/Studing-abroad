
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UniversityCard from "../components/UniversityCard";
import FavoriteButton from "../components/FavoriteButton";
import SearchBar from "../components/SearchBar";
import "./Universities.css";
import { useLanguage } from "../components/LanguageContext";
import { getUniversities, createUniversitySlug, } from "../services/universitiesApi";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import UniversityFilter from "../components/UniversityFilter";

const Universities = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const [universities, setUniversities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Все");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUniversities = async () => {
      try {
        const data = await getUniversities();
        setUniversities(data);
      } catch (err) {
        console.error("Университеттерди жүктөө катасы:", err);
        setError("Университеттерди жүктөө мүмкүн болгон жок.");
      } finally {
        setLoading(false);
      }
    };

    loadUniversities();
  }, []);

  const filteredUniversities = universities.filter((university) => {
    const matchesCountry =
      selectedCountry === "Все" ||
      university.country === selectedCountry;

    const matchesSearch = university.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    return matchesCountry && matchesSearch;
  });

  if (loading) {
    return (
      <div className="universities-page">
         <LoadingSpinner text="Университеттер жүктөлүүдө..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="universities-page">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="universities-page">
      <div className="country-filters">
        <h1>{t.universitiesPageTitle}</h1>

        <SearchBar value={search} onChange={setSearch} />

      <UniversityFilter
  selectedCountry={selectedCountry}
  setSelectedCountry={setSelectedCountry}
  language={language}
  t={t}
/>
      </div>

      <div className="universities-grid">
        {filteredUniversities.map((university) => (
          <div
            className="university-card-wrapper"
            key={university.id || university.name}
          >
            <FavoriteButton
              item={{
                id: `university-${university.name}`,
                type: "university",
                name: university.name,
                country: university.country,
                flag: university.flag,
                city: university.city,
                image: university.image,
                description: university.description,
                fields: university.fields,
                tuition: university.tuition,
                accommodation: university.accommodation,
                language: university.language,
                duration: university.duration,
              }}
            />

            <UniversityCard
              university={university}
              onDetails={(university) => {
                const slug = createUniversitySlug(university.name);
                navigate(`/universities/${slug}`);
              }}
            />
          </div>
        ))}
      </div>

      {filteredUniversities.length === 0 && (
  <EmptyState
    title="Университет табылган жок"
    description="Башка университеттин атын же башка өлкөнү тандап көрүңүз."
  />
)}
    </div>
  );
};

export default Universities;

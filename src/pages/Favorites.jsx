import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFavorites } from "../utils/Favorites";
import UniversityCard from "../components/UniversityCard";
import { useLanguage } from "../components/LanguageContext";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const { t }=useLanguage();

  useEffect(() => {
    const updateFavorites = () => {
      setFavorites(getFavorites());
    };

    updateFavorites();

    window.addEventListener("favoritesChanged", updateFavorites);
    window.addEventListener("storage", updateFavorites);

    return () => {
      window.removeEventListener("favoritesChanged", updateFavorites);
      window.removeEventListener("storage", updateFavorites);
    };
  }, []);

 const openUniversity = (university) => {
  const slug = university.name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]/gu, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  console.log("University:", university.name);
  console.log("Slug:", slug);

  navigate(`/universities/${slug}`);
};

  return (
    <main className="universities-page">
      <h1>❤️ {t.favoritesTitle}</h1>

      {favorites.length === 0 ? (
        <p>{t.favoritesEmpty}</p>
      ) : (
        <div className="universities-grid">
          {favorites.map((university) => (
            <UniversityCard
              key={university.id}
              university={university}
              onDetails={openUniversity}
            />
          ))}
        </div>
      )}
    </main>
  );
}
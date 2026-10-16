
import { useEffect, useState } from "react";
import { getFavorites } from "../utils/Favorites";
import UniversityCard from "../components/UniversityCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [selectedUniversity, setSelectedUniversity] =
    useState(null);

  useEffect(() => {
    const updateFavorites = () => {
      setFavorites(getFavorites());
    };

    updateFavorites();

    window.addEventListener(
      "favoritesChanged",
      updateFavorites
    );

    window.addEventListener("storage", updateFavorites);

    return () => {
      window.removeEventListener(
        "favoritesChanged",
        updateFavorites
      );

      window.removeEventListener("storage", updateFavorites);
    };
  }, []);

  return (
    <main className="universities-page">
      <h1>❤️ Избранное</h1>

      {favorites.length === 0 ? (
        <p>Пока нет избранных университетов</p>
      ) : (
        <div className="universities-grid">
          {favorites.map((university) => (
            <UniversityCard
              key={university.id}
              university={university}
              onDetails={() =>
                setSelectedUniversity(university)
              }
            />
          ))}
        </div>
      )}

      {selectedUniversity && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedUniversity(null)}
        >
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedUniversity(null)}
            >
              ✕
            </button>

            <img
              src={selectedUniversity.image}
              alt={selectedUniversity.name}
            />

            <h2>{selectedUniversity.name}</h2>
            <p>{selectedUniversity.country}</p>
            <p>{selectedUniversity.description}</p>
          </div>
        </div>
      )}
    </main>
  );
}

import { useState, useEffect } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(saved);
  }, []);

  return (
    <div className="favorites-page">
      <h1>❤️ Избранное</h1>

      {favorites.length === 0 ? (
        <p>Пока нет избранных стран</p>
      ) : (
        <div className="countries-grid">
          {favorites.map((country) => (
            <div
              className="country-card"
              key={country.cca3}
            >
              <img
                src={country.flags?.png}
                alt={country.name?.common}
              />

              <h3>{country.name?.common}</h3>
              <p>
                Столица:{" "}
                {country.capital?.[0] || "Не указана"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

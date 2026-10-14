
import { useEffect, useState } from "react";
import {
  getFavorites,
  toggleFavorite,
} from "../utils/favorites";
import "./FavoriteButton.css";

export default function FavoriteButton({ item }) {
  const [active, setActive] = useState(() =>
    getFavorites().some(
      (favorite) => favorite.id === item.id
    )
  );

  useEffect(() => {
    const update = () => {
      setActive(
        getFavorites().some(
          (favorite) => favorite.id === item.id
        )
      );
    };

    window.addEventListener("favoritesChanged", update);
    window.addEventListener("storage", update);

    return () => {
      window.removeEventListener("favoritesChanged", update);
      window.removeEventListener("storage", update);
    };
  }, [item.id]);

  const handleClick = () => {
    toggleFavorite(item);
  };

  return (
    <button
      type="button"
      className={`favorite-toggle ${active ? "active" : ""}`}
      onClick={handleClick}
      aria-label={
        active
          ? "Удалить из избранного"
          : "Добавить в избранное"
      }
      title={
        active
          ? "Удалить из избранного"
          : "Добавить в избранное"
      }
    >
      {active ? "♥" : "♡"}
    </button>
  );
}

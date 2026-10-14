
const STORAGE_KEY = "edivia-favorites";

export function getFavorites() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );
  } catch {
    return [];
  }
}

export function isFavorite(id) {
  return getFavorites().some(
    (item) => item.id === id
  );
}

export function toggleFavorite(item) {
  const favorites = getFavorites();

  const exists = favorites.some(
    (favorite) => favorite.id === item.id
  );

  const updated = exists
    ? favorites.filter(
        (favorite) => favorite.id !== item.id
      )
    : [...favorites, item];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );

  window.dispatchEvent(
    new Event("favoritesChanged")
  );

  return updated;
}

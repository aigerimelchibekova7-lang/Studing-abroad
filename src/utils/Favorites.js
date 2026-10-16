const STORAGE_KEY = "edivia-favorites";

export function getFavorites() {
  try {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function isFavorite(id) {
  return getFavorites().some(
    (item) => String(item.id) === String(id)
  );
}

export function toggleFavorite(item) {
  const favorites = getFavorites();

  const exists = favorites.some(
    (favorite) =>
      String(favorite.id) === String(item.id)
  );

  const updated = exists
    ? favorites.filter(
        (favorite) =>
          String(favorite.id) !== String(item.id)
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

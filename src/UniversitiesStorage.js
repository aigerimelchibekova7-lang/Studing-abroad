
const STORAGE_KEY = "edivia_universities";

export function getUniversities() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved !== null) {
      return JSON.parse(saved);
    }

    return [];
  } catch (error) {
    console.error("Ошибка загрузки университетов:", error);
    return [];
  }
}

export function saveUniversities(universities) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(universities)
    );
  } catch (error) {
    console.error("Ошибка сохранения университетов:", error);
  }
}

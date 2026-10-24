import { universities as initialUniversities } from "./pages/Universities";

const STORAGE_KEY = "edivia_universities";

export function getUniversities() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved !== null) {
      return JSON.parse(saved);
    }

    return initialUniversities;
  } catch (error) {
    console.error("Ошибка загрузки университетов:", error);
    return initialUniversities;
  }
}

export function saveUniversities(universities) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(universities)
  );
}
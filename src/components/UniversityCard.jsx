import React from "react";
import { useLanguage } from "./LanguageContext";
import { UniversityTranslations } from "./UniversityTranslations"

const UniversityCard = ({ university, onDetails }) => {
  const { t, language } = useLanguage();

  const fieldTranslations = {
  IT: {
    kg: "IT",
    en: "IT",
    ru: "IT",
  },
  "Медицина": {
    kg: "Медицина",
    en: "Medicine",
    ru: "Медицина",
  },
  "Бизнес": {
    kg: "Бизнес",
    en: "Business",
    ru: "Бизнес",
  },
  "Инженерия": {
    kg: "Инженерия",
    en: "Engineering",
    ru: "Инженерия",
  },
  "Наука": {
    kg: "Илим",
    en: "Science",
    ru: "Наука",
  },
  "Менеджмент": {
    kg: "Менеджмент",
    en: "Management",
    ru: "Менеджмент",
  },
  "Компьютердик илимдер": {
    kg: "Компьютердик илимдер",
    en: "Computer Science",
    ru: "Компьютерные науки",
  },
  "Архитектура": {
    kg: "Архитектура",
    en: "Architecture",
    ru: "Архитектура",
  },
  "Экономика": {
    kg: "Экономика",
    en: "Economics",
    ru: "Экономика",
  },
  "Социальные науки":{
    kg:"Коомдук илимдер",
    en:"Social sciences",
    ru:"Социальные науки",
  },
  "Дизайн":{
    kg:"Долбоор",
    en:"Design",
    ru:"Дизайн",
  },
  "Гуманитарные науки":{
    kg:"Гуманитардык илимдер",
    en:"Humanities",
    ru:"Гуманитарные науки",
  },
  "Международные программы":{
    kg:"Эл аралык программалар",
    en:"International programs",
    ru:"Международные программы",
  },
  "Право":{
    kg:"Укук",
    en:"Right",
    ru:"Право",
  }
};

const translatedUniversity =
  UniversityTranslations[university.name]?.[language];

const city = translatedUniversity?.city || university.city;
const description =
  translatedUniversity?.description || university.description;

  const countryTranslations = {
    "Арабия": {
      kg: "Сауд Арабиясы",
      en: "Saudi Arabia",
      ru: "Арабия",
    },
    "Южная Корея": {
      kg: "Түштүк Корея",
      en: "South Korea",
      ru: "Южная Корея",
    },
    "Германия": {
      kg: "Германия",
      en: "Germany",
      ru: "Германия",
    },
    "Италия": {
      kg: "Италия",
      en: "Italy",
      ru: "Италия",
    },
    "Турция": {
      kg: "Түркия",
      en: "Turkey",
      ru: "Турция",
    },
    "Китай": {
      kg: "Кытай",
      en: "China",
      ru: "Китай",
    },
  };

  const countryName =
    countryTranslations[university.country]?.[language] ||
    university.country;

  return (
    <div className="university-card">
      <div className="university-image">
        <img
          src={university.image}
          alt={university.name}
        />

        <span className="country-badge">
          {university.flag} {countryName}
        </span>
      </div>

      <div className="university-info">
  <p className="university-city">{city}</p>

  <h3>{ UniversityTranslations?.[university.name]?. [language]?.name || university.name}</h3>

  <p className="university-description">
    {description}
  </p>
     <div className="university-tags">
  {university.fields.map((field, index) => (
    <span key={index}>
      {fieldTranslations[field]?.[language] || field}
    </span>
  ))}
</div>
     <button
  type="button"
  onClick={() => {
    console.log("Подробнее басылды:", university.name);
    onDetails?.(university);
  }}
>
  {t.universityCardDetails}
</button>
      </div>
    </div>
  );
};

export default UniversityCard;  
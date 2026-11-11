
function UniversityFilter({
  selectedCountry,
  setSelectedCountry,
  language,
  t,
}) {
  const countries = [
    {
      value: "Все",
      label: t.allUniversities,
    },
    {
      value: "Арабия",
      label:
        language === "kg"
          ? "Сауд Арабиясы"
          : language === "en"
          ? "Saudi Arabia"
          : "Арабия",
    },
    {
      value: "Южная Корея",
      label:
        language === "kg"
          ? "Түштүк Корея"
          : language === "en"
          ? "South Korea"
          : "Южная Корея",
    },
    {
      value: "Германия",
      label: language === "en" ? "Germany" : "Германия",
    },
    {
      value: "Италия",
      label: language === "en" ? "Italy" : "Италия",
    },
    {
      value: "Турция",
      label: language === "kg" ? "Түркия" : language === "en" ? "Turkey" : "Турция",
    },
    {
      value: "Китай",
      label: language === "en" ? "China" : language === "kg" ? "Кытай" : "Китай",
    },
  ];

  return (
    <div className="country-filters">
      {countries.map((country) => (
        <button
          key={country.value}
          className={
            selectedCountry === country.value ? "active" : ""
          }
          onClick={() => setSelectedCountry(country.value)}
        >
          {country.label}
        </button>
      ))}
    </div>
  );
}

export default UniversityFilter;


import TuitionInfo from "./TuitionInfo";

function UniversityInfo({ university, translatedUniversity, t }) {
  const info = [
    {
      icon: "🏠",
      title: t.accommodationLabel,
      value:
        translatedUniversity?.accommodation ||
        university.accommodation ||
        t.accommodationUnknown,
    },
    {
      icon: "🌐",
      title: t.languageLabel,
      value:
        translatedUniversity?.language ||
        university.language ||
        t.accommodationUnknown,
    },
    {
      icon: "⏳",
      title: t.durationLabel,
      value:
        translatedUniversity?.duration ||
        university.duration ||
        t.durationUnknown,
    },
  ];

  return (
    <div className="university-info-grid">
      <TuitionInfo
        university={university}
        translatedUniversity={translatedUniversity}
        t={t}
      />

      {info.map((item) => (
        <article className="university-info-card" key={item.title}>
          <span>{item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.value}</p>
        </article>
      ))}
    </div>
  );
}

export default UniversityInfo;

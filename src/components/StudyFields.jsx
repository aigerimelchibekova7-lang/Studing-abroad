
function StudyFields({ fields = [], t }) {
  const safeFields = Array.isArray(fields) ? fields : [];

  return (
    <section className="university-fields-section">
      <h2>📚 {t.studyFields}</h2>

      <div className="university-programs">
        {safeFields.map((field, index) => (
          <div className="university-program" key={index}>
            ✦ {field}
          </div>
        ))}
      </div>
    </section>
  );
}

export default StudyFields;

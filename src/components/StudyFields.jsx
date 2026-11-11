
function StudyFields({ fields, t }) {
  return (
    <section className="university-fields-section">
      <h2>📚 {t.studyFields}</h2>

      <div className="university-programs">
        {fields?.map((field) => (
          <div className="university-program" key={field}>
            ✦ {field}
          </div>
        ))}
      </div>
    </section>
  );
}

export default StudyFields;


function RequirementsList({ requirements, t }) {
  return (
    <section className="university-requirements-section">
      <h2>📄 {t.admissionRequirements}</h2>

      <ul className="university-requirements">
        {requirements?.map((requirement, index) => (
          <li key={`${requirement}-${index}`}>
            {requirement}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RequirementsList;

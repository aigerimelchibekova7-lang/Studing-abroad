import "./EmptyState.css";

function EmptyState({
  title = "Маалымат табылган жок",
  description = "Башкача издеп көрүңүз."
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">🔍</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default EmptyState;
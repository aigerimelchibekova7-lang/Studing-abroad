// ар бир өлкө жөнүндө маалыматты өзүнчө карточка түрүндө көрсөтөт
import "./CountryCard.css";

function CountryCard({
  flag,
  country,
  description,
  directions,
  onClick,
  detailsText
}) {
  return (
    <div className="countries-card">
      <div className="countries-card-top">
        <div className="countries-flag">
          {flag}
        </div>
      </div>

      <h2>{country}</h2>

      <p>{description}</p>

      <div className="countries-directions">
        {directions.map((direction) => (
          <span key={direction}>{direction}</span>
        ))}
      </div>

      <button
        className="details-btn"
        onClick={onClick}
      >
        {detailsText}
      </button>
    </div>
  );
}

export default CountryCard;
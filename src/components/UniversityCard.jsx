import React from "react";

const UniversityCard = ({ university, onDetails }) => {
return (
<div className="university-card">
  <div className="university-image">
    <img
      src={university.image}
      alt={university.name}
    />
    <span className="country-badge">
      {university.flag} {university.country}
    </span>
  </div>
  <div className="university-info">
    <p className="university-city">
      {university.city}
    </p>
    <h3>{university.name}</h3>
    <p className="university-description">
      {university.description}
    </p>
    <div className="university-tags">
      {university.fields.map((field, index) => (
        <span key={index}>
          {field}
        </span>
      ))}
    </div>
    <button
    type="button"
    onClick={() => {
       console.log("Нажали:", university.name);
     onDetails(university);
     }}
    >
      Подробнее
    </button>

  </div>

</div>

);
};

export default UniversityCard
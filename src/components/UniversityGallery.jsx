
function UniversityGallery({
  images = [],
  activeImage,
  setActiveImage,
  university,
  t,
}) {
  const safeImages = Array.isArray(images) ? images : [];

  return (
    <section className="university-gallery">
      {safeImages.length > 0 && (
        <img
          key={safeImages[activeImage] || safeImages[0]}
          src={safeImages[activeImage] || safeImages[0]}
          alt={university.name}
          className="university-gallery-image"
        />
      )}

      <div className="university-gallery-overlay">
        <span>
          {university.flag} {university.country}
        </span>

        <h1>{university.name}</h1>

        <p>📍 {university.city}</p>
      </div>

      {safeImages.length > 1 && (
        <>
          <button
            className="gallery-arrow gallery-prev"
            onClick={() =>
              setActiveImage(
                (current) =>
                  (current - 1 + safeImages.length) %
                  safeImages.length
              )
            }
            aria-label={t.previousPhoto}
          >
            ‹
          </button>

          <button
            className="gallery-arrow gallery-next"
            onClick={() =>
              setActiveImage(
                (current) =>
                  (current + 1) % safeImages.length
              )
            }
            aria-label={t.nextPhoto}
          >
            ›
          </button>

          <div className="gallery-dots">
            {safeImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                className={`gallery-dot ${
                  index === activeImage ? "active" : ""
                }`}
                onClick={() => setActiveImage(index)}
                aria-label={`${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default UniversityGallery;

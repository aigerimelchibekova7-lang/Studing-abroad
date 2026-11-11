
function UniversityGallery({
  images,
  activeImage,
  setActiveImage,
  university,
  t,
}) {
  return (
    <section className="university-gallery">
      <img
        key={images[activeImage]}
        src={images[activeImage]}
        alt={university.name}
        className="university-gallery-image"
      />

      <div className="university-gallery-overlay">
        <span>
          {university.flag} {university.country}
        </span>

        <h1>{university.name}</h1>

        <p>📍 {university.city}</p>
      </div>

      {images.length > 1 && (
        <>
          <button
            className="gallery-arrow gallery-prev"
            onClick={() =>
              setActiveImage(
                (current) =>
                  (current - 1 + images.length) % images.length
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
                (current) => (current + 1) % images.length
              )
            }
            aria-label={t.nextPhoto}
          >
            ›
          </button>

          <div className="gallery-dots">
            {images.map((image, index) => (
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

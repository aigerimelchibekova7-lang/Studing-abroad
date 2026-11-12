import "./LoadingSpinner.css";
// сайтта маалымат жүктөлүп жаткан учурда колдонуучуга жүктөлүү процессин көрсөтүү
function LoadingSpinner({ text = "Жүктөлүүдө..." }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>{text}</p>
    </div>
  );
}

export default LoadingSpinner;
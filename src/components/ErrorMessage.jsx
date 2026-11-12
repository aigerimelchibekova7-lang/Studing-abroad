import "./ErrorMessage.css";
// Ката чыкканын корсотот
function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="error-message">
      <span>⚠️</span>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
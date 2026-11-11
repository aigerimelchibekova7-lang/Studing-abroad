
function FormFeedback({ sent, error, successMessage }) {
  if (error) {
    return (
      <div className="error-message" role="alert">
        ❌ {error}
      </div>
    );
  }

  if (sent) {
    return (
      <div className="success-message" role="status">
        {successMessage}
      </div>
    );
  }

  return null;
}

export default FormFeedback;

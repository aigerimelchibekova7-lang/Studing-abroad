// колдонуучуга узунураак текст же билдирүү жазууга мүмкүнчүлүк берүү
function FormTextarea({
  label,
  name,
  placeholder,
  required = false,
  rows = 5,
}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </div>
  );
}

export default FormTextarea;

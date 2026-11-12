// Издөө
function FormInput({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default FormInput;

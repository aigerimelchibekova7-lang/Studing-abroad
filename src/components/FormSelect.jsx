// колдонуучуга тизмеден бир вариантты тандоого мүмкүнчүлүк берүү
function FormSelect({
  label,
  name,
  placeholder,
  options,
  required = false,
}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <select name={name} defaultValue="" required={required}>
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;

import FormTextarea from "./FormTextarea";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormFeedback from "./FormFeedback";
// Контакт формасы
function ContactForm({ t, loading, sent, error, handleSubmit }) {
const countryOptions = [
  { value: "Саудовская Аравия", label: t.countries[0] },
  { value: "Южная Корея", label: t.countries[1] },
  { value: "Германия", label: t.countries[2] },
  { value: "Италия", label: t.countries[3] },
  { value: "Турция", label: t.countries[4] },
  { value: "Китай", label: t.countries[5] },
];
   
  return (
   <div className="contact-form">
      <h2>{t.writeUs}</h2>

      <p className="form-description">{t.description}</p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <FormInput
            label={t.yourName}
            name="full_name"
            placeholder={t.fullName}
            required
          />

          <FormInput
            label={t.phone}
            type="tel"
            name="phone"
            placeholder={t.phoneNumber}
            required
          />
        </div>

        <div className="form-row">
          <FormInput
            label={t.email}
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />

        <FormSelect
  label={t.chooseCountry}
  name="country"
  placeholder={t.countryPlaceholder}
  options={countryOptions}
  required
/>
        </div>

      <FormTextarea
  label={t.message}
  name="message"
  placeholder={t.messagePlaceholder}
  required
  rows={5}
/>

        <button type="submit" disabled={loading}>
          {loading ? t.sending : t.send}
        </button>
      </form>

     <FormFeedback
  sent={sent}
  error={error}
  successMessage={t.success}
/>
    </div>
  );
}

export default ContactForm;
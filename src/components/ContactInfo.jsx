
import ContactInfoItem from "./ContactInfoItem";

function ContactInfo({ t }) {
  return (
    <div className="contact-info">
      <h2>{t.contacts}</h2>

      <ContactInfoItem icon="☎️" title={t.phone}>
        <p>+996 700 000 000</p>
      </ContactInfoItem>

      <ContactInfoItem icon="✉️" title={t.email}>
        <p>info@edivia.com</p>
      </ContactInfoItem>

      <ContactInfoItem icon="📍" title={t.address}>
        <p>{t.location}</p>
        <p>{t.building}</p>
      </ContactInfoItem>

      <ContactInfoItem icon="🕐" title={t.workingHours}>
        <p>{t.weekdays}</p>
        <p>{t.weekends}</p>
      </ContactInfoItem>
    </div>
  );
}

export default ContactInfo;

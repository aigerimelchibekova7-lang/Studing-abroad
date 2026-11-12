// байланыш маалыматтарын көрсөтөт
function ContactInfoItem({ icon, title, children }) {
  return (
    <div className="info-item">
      <span>{icon}</span>

      <div>
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
}

export default ContactInfoItem;

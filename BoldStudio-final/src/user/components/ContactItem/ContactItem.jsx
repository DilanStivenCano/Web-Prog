import './ContactItem.css'

export function ContactItem({ title, info }) {
  return (
    <div className="contactInfo">
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
}

import './StaffMember.css';

export function StaffMember({ img, role, backgroundColor }) {
  return (
    <div className='staffMember' style={{ backgroundColor }}>
      <h3>{role}</h3>
      <img src={img} alt={`Avatar of ${role}`} />
    </div>
  );
}

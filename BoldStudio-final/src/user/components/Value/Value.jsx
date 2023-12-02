import './Value.css'

export function Value({ img, name, description }) {
  return (
    <div>
      <div className='imgContainer'>
        <img src={img} alt="Bold Studio's value" />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

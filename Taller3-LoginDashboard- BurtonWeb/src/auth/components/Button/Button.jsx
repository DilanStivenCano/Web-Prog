import './Button.css'

export function Button ({ labelText, type, onClick }) {
    return (
      <button className='login--button' type={type} id='button' onClick={onClick}>
        {labelText}
      </button>
    )
  }
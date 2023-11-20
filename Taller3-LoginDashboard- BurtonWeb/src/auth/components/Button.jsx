export function Button ({ labelText, type, onClick }) {
    return (
      <button type={type} id='button' onClick={onClick}>
        {labelText}
      </button>
    )
  }
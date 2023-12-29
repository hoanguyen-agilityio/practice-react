import './input.css'

interface IInput {
  type: string,
  placeholder?: string,
  name: string,
  ariaLabel: string
}

const Input = ({
  type,
  placeholder,
  name,
  ariaLabel
} :IInput ) => {
  return (
    <input
      className='form-input'
      type={type}
      placeholder={placeholder}
      name={name}
      aria-label={ariaLabel}
    />
  )
}

export default Input

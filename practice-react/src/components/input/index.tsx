import './input.css'

interface IInput {
  type: string,
  placeholder?: string
}

const Input = ( { type, placeholder} :IInput ) => {
  return (
    <input className='form-input' type={type} placeholder={placeholder} name={type} aria-label={type} />
  )
}

export default Input

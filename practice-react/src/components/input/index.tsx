import './input.css'

export interface IInput {
  type: string,
  placeholder?: string,
  name: string,
  ariaLabel: string,
  className: string
}

const Input = ({
  type,
  placeholder,
  name,
  ariaLabel,
  className
} :IInput ) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      aria-label={ariaLabel}
    />
  )
}

export default Input

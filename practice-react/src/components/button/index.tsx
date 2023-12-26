import './button.css'

interface IButton {
  className: string,
  ariaLabel: string,
  name: string
}

const Button = ({ className, ariaLabel, name } :IButton) => {
  return (
    <button
      type='button'
      className={className}
      aria-label={ariaLabel}
    >{name}
    </button>
  )
}

export default Button

import './button.css'

interface IButton {
  className: string,
  ariaLabel: string,
  name: string,
  icon?: string,
  onClick?: () => void
}

const Button = ({
  className,
  ariaLabel,
  name,
  icon,
  onClick
} :IButton) => {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {name}
      {icon && <img src={icon} className='btn-logout-icon' />}
    </button>
  )
}

export default Button

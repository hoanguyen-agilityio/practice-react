import './button.css'

interface IButton {
  className: string,
  ariaLabel: string,
  name: string,
  icon?: string
}

const Button = ({ className, ariaLabel, name, icon } :IButton) => {
  if (icon) {
    return <button type='button' className={className} aria-label={ariaLabel}>{name}<img src={icon} className='btn-logout-icon' /></button>
  }

  return <button type='button' className={className} aria-label={ariaLabel}>{name}</button>
}

export default Button

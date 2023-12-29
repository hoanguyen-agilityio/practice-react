import './button.css'

interface IButton {
  className: string,
  ariaLabel: string,
  name: string,
  icon?: string
}

const Button = ({ className, ariaLabel, name, icon } :IButton) => {
  return <button type='button' className={className} aria-label={ariaLabel}>{name} {icon && <img src={icon} className='btn-logout-icon' />}</button>
}

export default Button

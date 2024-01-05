import './button.css';

interface IButton {
  className: string,
  ariaLabel: string,
  name?: string,
  icon?: string,
  classNameIcon?: string,
  alt?: string,
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const Button = ({
  className,
  ariaLabel,
  name,
  icon,
  classNameIcon,
  alt,
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
      {icon && <img src={icon} className={classNameIcon} alt={alt} />}
    </button>
  )
}

export default Button;

import './button.css';

interface IButton {
  className: string;
  ariaLabel: string;
  name?: string;
  icon?: string;
  classNameIcon?: string;
  alt?: string;
  disableButton?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({
  className,
  ariaLabel,
  name,
  icon,
  classNameIcon,
  alt,
  disableButton,
  onClick
} :IButton) => {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disableButton}
    >
      {name}
      {icon && <img src={icon} className={classNameIcon} alt={alt} />}
    </button>
  );
};

export default Button;

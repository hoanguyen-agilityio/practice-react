interface IButton {
  type: 'default' | 'primary' | 'secondary';
  onClick: () => void;
  leftIcon?: string;
  rightIcon?: string;
  icon?: string;
  label: string;
  alt?: string;
  iconClasses: string;
  custom?: string;
}

const Button = ({
  type='default',
  label,
  leftIcon,
  rightIcon,
  icon,
  alt,
  iconClasses,
  custom,
  onClick
} :IButton) => {
  let buttonClasses = `font-jost font-size: 1rem bg-black text-white border-none rounded-10px ${custom} active:shadow-3xl`

  if (type === 'primary') {
    buttonClasses += ' bg-white text-red-600'
  }

  if (leftIcon) {
    return (
      <button
        className={buttonClasses}
        onClick={onClick}
      >
        <img
          src={leftIcon}
          alt={alt}
          className={iconClasses}
        />
        {label}
      </button>
    )
  }
  else if (rightIcon) {
    return (
      <button
        className={buttonClasses}
        onClick={onClick}
      >
        {label}
        <img
          src={rightIcon}
          alt={alt}
          className={iconClasses}
        />
      </button>
    )
  }
  else if (icon) {
    return (
      <button
        className={buttonClasses}
        onClick={onClick}
      >
        <img
          src={icon}
          alt={alt}
          className={iconClasses}
        />
      </button>
    )
  } else {
    return (
      <button
        className={buttonClasses}
        onClick={onClick}
      >
        {label}
      </button>
    )
  }
}

export default Button;

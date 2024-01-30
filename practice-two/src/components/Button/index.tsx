import { twMerge } from 'tailwind-merge';

interface IButton {
  type: 'default' | 'primary' | 'secondary';
  onClick?: () => void;
  icon?: string;
  label?: string;
  alt?: string;
  iconClasses?: string;
  customClass?: string;
}

const Button = ({
  type,
  label,
  icon,
  alt,
  iconClasses,
  customClass,
  onClick
}: IButton) => {
  let buttonClasses = 'font-jost font-size: 1rem rounded-10px active:shadow-3xl ';

  switch (type) {
    case 'primary':
      buttonClasses += twMerge('bg-white text-black', `${customClass}`);

      break;
    case 'secondary':
      buttonClasses = `${customClass} active:shadow-3xl border-none bg-none`;

      break;
    default:
      buttonClasses += twMerge('bg-black text-white border-none', `${customClass}`);
  }

  return (
    <button
      className={buttonClasses} onClick={onClick}>
      {label && <span>{label}</span>}
      {icon && <img src={icon} alt={alt} className={iconClasses} />}
    </button>
  );
};

export default Button;

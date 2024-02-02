import { arrowDropDown } from '../../assets/Images';
import { Button } from '..';
import Checkbox from '../Checkbox';

interface IDropdown {
  option?: {
    variants: string;
    checked: boolean;
    label: string;
    customClass?: string;
  }[];
  buttonTitle: string;
  isOpen?: boolean;
  className: string;
  onChange?: () => void;
  onClick?: () => void;
}

const Dropdown = ({
  buttonTitle,
  isOpen,
  onChange,
  option,
  onClick,
  className
}: IDropdown) => {
  const myOption = option || [];
  return (
    <div className={className}>
      <Button
        label={buttonTitle}
        type='primary'
        icon={arrowDropDown}
        customClass='flex items-center font-jost text-xl pb-4 w-60 justify-between font-bold'
        iconClasses='w-8'
        onClick={onClick}
      />
      <ul>
        {isOpen &&
          myOption.map(({
            variants,
            checked,
            label,
            customClass
          }) => (
            <Checkbox
              key={label}
              variants={variants}
              checked={checked}
              onChange={onChange}
              label={label}
              customClass={customClass}
            />
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;

import { arrowDropDown } from '../../assets/Images';
import { Button } from '..';
import Checkbox from '../Checkbox';

interface IDropdown {
  option?: {
    variants: string;
    checked: boolean;
    labelCheckbox: string;
    customClass?: string;
  }[];
  labelButton: string;
  isOpen?: boolean;
  className: string;
  onChange?: () => void;
  onClick?: () => void;
}

const Dropdown = ({
  labelButton,
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
        label={labelButton}
        type='primary'
        icon={arrowDropDown}
        customClass='flex items-center font-jost text-xl pb-4 w-60 justify-between'
        iconClasses='w-8'
        onClick={onClick}
      />
      <ul>
        {isOpen &&
          myOption.map(({
            variants,
            checked,
            labelCheckbox,
            customClass
          }) => (
            <Checkbox
              key={labelCheckbox}
              variants={variants}
              checked={checked}
              onChange={onChange}
              labelCheckbox={labelCheckbox}
              customClass={customClass}
            />
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;

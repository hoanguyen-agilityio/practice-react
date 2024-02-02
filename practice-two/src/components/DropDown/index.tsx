import { arrowDropDown } from '../../assets/Images';
import { Button } from '..';
import Checkbox from '../Checkbox';

interface IDropdown {
  option: {
    variants: string;
    checked: boolean;
    label: string;
    customClass?: string;
  }[];
  buttonTitle: string;
  isOpen: boolean;
  onChange: () => void;
}

const Dropdown = ({
  buttonTitle,
  isOpen,
  onChange,
  option
}: IDropdown) => {
  return (
    <div>
      <Button
        label={buttonTitle}
        type='primary'
        icon={arrowDropDown}
        customClass='flex items-center font-jost text-xl mb-2.5'
        iconClasses='w-8 ml-4'
      />
      <ul>
        {isOpen &&
          option.map(({
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

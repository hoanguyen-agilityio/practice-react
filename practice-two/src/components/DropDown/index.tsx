import { arrowDropDown } from '../../assets/Images';
import { Button } from '..';
import Checkbox from '../Checkbox';

interface IDropDown {
  option: {
    variants: string;
    checked: boolean;
    labelCheckbox: string;
    customClass?: string;
  }[];
  labelButton: string;
  isOpen: boolean;
  onChange: () => void;
}

const DropDown = ({
  labelButton,
  isOpen,
  onChange,
  option
}: IDropDown) => {
  return (
    <div>
      <Button
        label={labelButton}
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
            labelCheckbox,
            customClass
          }) => (
            <Checkbox
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

export default DropDown;

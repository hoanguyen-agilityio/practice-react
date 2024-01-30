import { twMerge } from 'tailwind-merge';

interface ICheckbox {
  variants: 'default' | 'primary';
  checked: boolean;
  customClass?: string;
  label: string;
  onChange: () => void;
}

const Checkbox = ({
  variants,
  checked,
  customClass,
  label,
  onChange
}: ICheckbox) => {
  let checkboxClasses = 'h-4 w-4 border rounded-10px border-black border-solid accent-black ';

  switch (variants) {
    case 'primary':
      checkboxClasses += twMerge('border-none', `${customClass}`);

      break;
  }

  return (
    <>
      <input type="checkbox" checked={checked} className={checkboxClasses} onChange={onChange} />
      <label htmlFor="checkbox" className="font-jost text-xl ml-3.5">
        {label}
      </label>
    </>
  );
};

export default Checkbox;

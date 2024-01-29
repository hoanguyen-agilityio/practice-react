interface ICheckbox {
  variants: 'default' | 'primary';
  checked: boolean;
  customClass?: string;
  label: string;
  onChange: () => void;
}

const Checkbox = ({
  variants = 'default',
  checked,
  customClass,
  label,
  onChange
}: ICheckbox) => {
  let checkboxClasses = 'h-4 w-4 border rounded-10px border-black border-solid';

  if (variants === 'primary') {
    checkboxClasses += `!border-none ${customClass}`;
  }

  return (
    <>
      <input type='checkbox' checked={checked} className={checkboxClasses} onChange={onChange} />
      <label htmlFor='checkbox' className='font-jost text-xl ml-3.5'>
        {label}
      </label>
    </>
  );
};

export default Checkbox;

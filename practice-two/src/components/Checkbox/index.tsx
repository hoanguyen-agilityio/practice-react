import { twMerge } from 'tailwind-merge';

interface ICheckbox {
  variants?: 'default' | 'primary' | string;
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

  let checkboxClasses = 'h-4 w-4 border rounded border-black border-solid accent-black mr-3.5 ';

  if (variants === 'primary') {
    checkboxClasses += twMerge(' items-center justify-center border-none', `${customClass}`);
  }

  return (
    <ul>
      <li>
        {variants === 'default' ? (
          <>
            <input
              type='checkbox'
              checked={checked}
              className={checkboxClasses}
              onChange={onChange}
            />
            <label htmlFor='checkbox' className='font-jost text-xl cursor-pointer'>
              {label}
            </label>
          </>
        ) : (
          <>
            <input
              type='checkbox'
              id='myCheckbox'
              checked={checked}
              onChange={onChange}
              className='hidden'
            />
            <label
              htmlFor='myCheckbox'
              className='flex items-center cursor-pointer font-jost text-xl'
            >
              <div className={checkboxClasses}>
                {checked && (
                  <svg className='h-4 w-4 text-white' viewBox='0 0 20 20' fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M3.293 8.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 0 1.414 0l10-10a1 1 0 1 1 1.414 1.414l-11 11a1 1 0 0 1-1.414 0l-6-6z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </div>
              {label}
            </label>
          </>
        )}
      </li>
    </ul>
  );
};

export default Checkbox;

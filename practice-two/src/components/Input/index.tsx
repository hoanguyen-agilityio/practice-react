interface IInput {
  ariaLabel: string;
  name: string;
  defaultValue?: string;
  type: string;
  customClass: string;
  placeholder?: string;
  errorMessage?: string;
  onChange: () => void;
}

const Input = ({
  ariaLabel,
  name,
  defaultValue,
  type,
  customClass,
  placeholder,
  errorMessage,
  onChange,
}: IInput) => {
  const inputClasses = `font-jost text-base rounded-10px p-4 ${customClass} border border-black border-solid`;
  const errorMessageClasses = 'font-jost text-sm text-red-600 pt-2.5';

  return (
    <>
        <input
          className={inputClasses}
          placeholder={placeholder}
          type={type}
          aria-label={ariaLabel}
          name={name}
          value={defaultValue}
          onChange={onChange}
        />
        {errorMessage && <p className={errorMessageClasses}>{errorMessage}</p>}
    </>
  );
};

export default Input;

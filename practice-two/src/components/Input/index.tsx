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
  placeholder,
  errorMessage,
  onChange,
}: IInput) => {
  return (
    <>
      <input
        className= 'font-jost text-base rounded-10px p-4 border border-black border-solid w-445px'
        placeholder={placeholder}
        type={type}
        aria-label={ariaLabel}
        name={name}
        value={defaultValue}
        onChange={onChange}
      />
      {errorMessage && <p className='font-jost text-sm text-red-600 pt-2.5'>{errorMessage}</p>}
    </>
  );
};

export default Input;

import { Student } from '@/types';
import './input.css';

export interface IInput {
  type: string,
  placeholder?: string,
  name: string,
  ariaLabel: string,
  className: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
}

const Input = ({
  type,
  placeholder,
  name,
  ariaLabel,
  className,
  value,
  onChange,
  errorMessage
} :IInput ) => {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
      />
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </>
  )
}

export default Input;

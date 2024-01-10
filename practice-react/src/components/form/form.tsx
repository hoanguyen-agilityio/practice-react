import { Input } from '..';
import { IInput } from '../Input';

interface IForm extends IInput {
  nameLabel: string
}

const Form = ({
  nameLabel,
  type,
  name,
  ariaLabel,
  onChange,
  errorMessage
} :IForm) => {
  return (
    <div className='form-input-group'>
      <label
        className='label-input'
      >
        {nameLabel}
      </label>
      <Input
        type={type}
        name={name}
        ariaLabel={ariaLabel}
        className='form-input'
        onChange={onChange}
        errorMessage={errorMessage}
      />
    </div>
  )
}

export default Form;

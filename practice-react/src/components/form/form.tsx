import { Input } from ".."
import { IInput } from "../Input"

interface IForm extends IInput {
  nameLabel: string
}

const Form = ({
  nameLabel,
  type,
  name,
  ariaLabel
} :IForm) => {
  return (
    <form className='form'>
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
        />
      </div>
    </form>
  )
}

export default Form

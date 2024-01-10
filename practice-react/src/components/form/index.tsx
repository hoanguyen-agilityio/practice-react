import './form.css'
import {
  Button,
  FORM_INPUT,
  Form
} from '..';

interface IModalForm {
  errorMessage: string,
  title: string,
  onClick: () => void,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: () => void
}

const ModalForm = ({
  title,
  errorMessage,
  onClick,
  onChange,
  onClickSubmit
} :IModalForm) => {
  return (
    <div className='modal modal-form'>
      <div className='vertical-scroll'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h3 className='title title-form-add-update'>
              {title}
            </h3>
            <Button
              className='btn-close-modal'
              name='X'
              ariaLabel='Button to turn off form'
              onClick={onClick}
            />
          </div>
          <form className='form'>
            {FORM_INPUT.map(({
              nameLabel,
              type,
              name,
              ariaLabel,
            }) => {
                return (
                  <Form
                    nameLabel={nameLabel}
                    type={type}
                    name={name}
                    ariaLabel={ariaLabel}
                    className='form-input'
                    onChange={onChange}
                    errorMessage={errorMessage}
                  />
                )
            })}
          </form>
          <div className='btn-group'>
            <Button
              name='CANCEL'
              className='btn btn-cancel'
              ariaLabel='Cancel'
              onClick={onClick}
            />
            <Button
              name='SUBMIT'
              className='btn btn-submit'
              ariaLabel='Create Student'
              onClick={onClickSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalForm;

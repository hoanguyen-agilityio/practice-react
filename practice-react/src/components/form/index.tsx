import './form.css'
import { Button } from '..';
import FormControl, { IForm } from './form';

interface IModalForm extends IForm {
  errorMessageName: string,
  errorMessageEmail: string,
  errorMessagePhone: string,
  errorMessageEnrollNumber: string,
  errorMessageDateOfAdmission: string,
  title: string,
  onClick: () => void,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: () => void
  disableButton: boolean
}

const ModalForm = ({
  title,
  errorMessageName,
  errorMessageEmail,
  errorMessagePhone,
  errorMessageEnrollNumber,
  errorMessageDateOfAdmission,
  onClick,
  onChange,
  onClickSubmit,
  disableButton
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
            <FormControl
              nameLabel='Name'
              type='text'
              name='name'
              ariaLabel='Enter name'
              className='form-input'
              onChange={onChange}
              errorMessage={errorMessageName}
            />
            <FormControl
              nameLabel='Email'
              type='email'
              name='email'
              ariaLabel='Enter name'
              className='form-input'
              onChange={onChange}
              errorMessage={errorMessageEmail}
            />
            <FormControl
              nameLabel='Phone'
              type='tel'
              name='phone'
              ariaLabel='Enter phone'
              className='form-input'
              onChange={onChange}
              errorMessage={errorMessagePhone}
            />
            <FormControl
              nameLabel='Enroll Number'
              type='number'
              name='enrollNumber'
              ariaLabel='Enter enrollNumber'
              className='form-input'
              onChange={onChange}
              errorMessage={errorMessageEnrollNumber}
            />
            <FormControl
              nameLabel='Date of admission'
              type='date'
              name='dateOfAdmission'
              ariaLabel='Enter date of admission'
              className='form-input'
              onChange={onChange}
              errorMessage={errorMessageDateOfAdmission}
            />
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
              disableButton={disableButton}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalForm;

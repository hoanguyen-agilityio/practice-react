import './form.css'
import { Button } from '..';
import FormControl, { IForm } from './form';
import { PartialStudent } from '@/types';

interface IModalForm extends IForm {
  errors: PartialStudent,
  title: string,
  onClose: () => void,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: () => void
  disableButton: boolean,
  valueName: string,
  valueEmail: string,
  valuePhone: string,
  valueEnrollNumber: string,
  valueDateOfAdmission: string
}

const ModalForm = ({
  title,
  errors,
  onClose,
  valueName,
  valueEmail,
  valuePhone,
  valueEnrollNumber,
  valueDateOfAdmission,
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
              onClick={onClose}
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
              value={valueName}
              errorMessage={errors.name}
            />
            <FormControl
              nameLabel='Email'
              type='email'
              name='email'
              ariaLabel='Enter name'
              className='form-input'
              onChange={onChange}
              value={valueEmail}
              errorMessage={errors.email}
            />
            <FormControl
              nameLabel='Phone'
              type='tel'
              name='phone'
              ariaLabel='Enter phone'
              className='form-input'
              onChange={onChange}
              value={valuePhone}
              errorMessage={errors.phone}
            />
            <FormControl
              nameLabel='Enroll Number'
              type='number'
              name='enrollNumber'
              ariaLabel='Enter enrollNumber'
              className='form-input'
              onChange={onChange}
              value={valueEnrollNumber}
              errorMessage={errors.enrollNumber}
            />
            <FormControl
              nameLabel='Date of admission'
              type='date'
              name='dateOfAdmission'
              ariaLabel='Enter date of admission'
              className='form-input'
              onChange={onChange}
              value={valueDateOfAdmission}
              errorMessage={errors.dateOfAdmission}
            />
          </form>
          <div className='btn-group'>
            <Button
              name='CANCEL'
              className='btn btn-cancel'
              ariaLabel='Cancel'
              onClick={onClose}
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

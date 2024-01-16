import './form.css';
import { Button } from '..';
import {
  PartialStudent,
  Student
} from '@/types';
import FormControl from './form';

interface IModalForm {
  errors: PartialStudent;
  title: string;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  disableButton: boolean;
  valueInput: Student;
  classNameButton: string;
}

const ModalForm = ({
  title,
  errors,
  onClose,
  valueInput,
  onChange,
  onClickSubmit,
  disableButton,
  classNameButton
}: IModalForm) => {
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
              value={valueInput.name}
              errorMessage={errors.name}
            />
            <FormControl
              nameLabel='Email'
              type='email'
              name='email'
              ariaLabel='Enter name'
              className='form-input'
              onChange={onChange}
              value={valueInput.email}
              errorMessage={errors.email}
            />
            <FormControl
              nameLabel='Phone'
              type='tel'
              name='phone'
              ariaLabel='Enter phone'
              className='form-input'
              onChange={onChange}
              value={valueInput.phone}
              errorMessage={errors.phone}
            />
            <FormControl
              nameLabel='Enroll Number'
              type='number'
              name='enrollNumber'
              ariaLabel='Enter enrollNumber'
              className='form-input'
              onChange={onChange}
              value={valueInput.enrollNumber}
              errorMessage={errors.enrollNumber}
            />
            <FormControl
              nameLabel='Date of admission'
              type='date'
              name='dateOfAdmission'
              ariaLabel='Enter date of admission'
              className='form-input'
              onChange={onChange}
              value={valueInput.dateOfAdmission}
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
              className={classNameButton}
              ariaLabel='Create Student'
              onClick={onClickSubmit}
              disableButton={disableButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;

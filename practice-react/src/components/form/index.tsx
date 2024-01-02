import './form.css'
import {
  Button,
  FORM_INPUT,
  Form
} from ".."

const ModalForm = () => {
  return (
    <div className='modal modal-form'>
      <div className='vertical-scroll'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h3 className='title title-form-add-update'>
              Student
            </h3>
            <Button
              className='btn-close-modal'
              name='X'
              ariaLabel='Button to turn off form'
            />
          </div>
          {FORM_INPUT.map(({
            nameLabel,
            type,
            name,
            ariaLabel }) => {
              return (
                <Form
                  nameLabel={nameLabel}
                  type={type}
                  name={name}
                  ariaLabel={ariaLabel}
                  className='form-input'
                />
              )
          })}
          <div className="btn-group">
            <Button
              name='CANCEL'
              className='btn btn-cancel'
              ariaLabel='Cancel'
            />
            <Button
              name='CREATE STUDENT'
              className='btn btn-create-student'
              ariaLabel='Create Student'
            />
            <Button
              name='UPDATE STUDENT'
              className='btn btn-update-student'
              ariaLabel='Update Student'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalForm

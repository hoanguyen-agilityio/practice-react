import '../Form/form.css';
import { Button } from '..';

interface isModalDelete {
  onClickHideModal: () => void;
  onClickDelete: () => void;
}

const ModalDelete = ({
  onClickHideModal,
  onClickDelete
} :isModalDelete) => {
  return (
    <div className='modal modal-confirm-delete'>
      <div className='modal-content modal-content-delete'>
        <div className='modal-header'>
          <p className='title title-confirm-delete'>
            CONFIRM DELETE!!!
          </p>
          <Button
            name='X'
            className='btn-close-modal'
            ariaLabel='Button to turn off form'
            onClick={onClickHideModal}
          />
        </div>
        <p className='describe'>
          Are you sure you want delete this student
        </p>
        <div className='btn-form-confirm-delete'>
          <Button
            name='CANCEL'
            className='btn btn-cancel'
            ariaLabel='Cancel'
            onClick={onClickHideModal}
          />
          <Button
            name='DELETE'
            className='btn btn-delete'
            ariaLabel='Delete'
            onClick={onClickDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalDelete;

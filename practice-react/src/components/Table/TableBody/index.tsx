import { Button } from '@/components';
import '../table.css';
import {
  avatar,
  btnDelete,
  btnEdit
} from '@/assets/Images'

interface ITableBody {
  id?: string,
  name: string,
  email: string,
  phone: string,
  enrollNumber: string,
  dateOfAdmission: string,
  onClickButtonEdit: () => void
  onClickButtonDelete: () => void
}

const TableBody = ({
  id,
  name,
  email,
  phone,
  enrollNumber,
  dateOfAdmission,
  onClickButtonEdit,
  onClickButtonDelete
} :ITableBody) => {
  return (
    <>
      <li className='table-row' id={id}>
        <span><img src={avatar} alt='avatar student' className='avt-student' /></span>
        <span>{name}</span>
        <span>{email}</span>
        <span>{phone}</span>
        <span>{enrollNumber}</span>
        <span>{dateOfAdmission}</span>
        <span>
          <Button
            className='btn-table btn-edit'
            onClick={onClickButtonEdit}
            ariaLabel='button edit'
            icon={btnEdit}
            id={id}
          />
        </span>
        <span>
          <Button
            className='btn-table btn-delete btn-table-delete'
            onClick={onClickButtonDelete}
            ariaLabel='button delete'
            icon={btnDelete}
            id={id}
          />
        </span>
      </li>
    </>
  )
}

export default TableBody

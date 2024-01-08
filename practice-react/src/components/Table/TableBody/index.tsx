import { Button } from '@/components';
import '../table.css';
import {
  avatar,
  btnDelete,
  btnEdit
} from '@/assets/Images'

interface ITableBody {
  name: string,
  email: string,
  phone: string,
  enrollNumber: string,
  dateOfAdmission: string,
  onClick: () => void
}

const TableBody = ({
  name,
  email,
  phone,
  enrollNumber,
  dateOfAdmission,
  onClick
} :ITableBody) => {
  return (
    <>
      <li className='table-row'>
        <span><img src={avatar} alt='avatar student' className='avt-student' /></span>
        <span>{name}</span>
        <span>{email}</span>
        <span>{phone}</span>
        <span>{enrollNumber}</span>
        <span>{dateOfAdmission}</span>
        <span>
          <Button
            className='btn-table btn-edit'
            onClick={onClick}
            ariaLabel='button edit'
            icon={btnEdit}
          />
        </span>
        <span>
          <Button
            className='btn-table btn-delete btn-table-delete'
            onClick={onClick}
            ariaLabel='button delete'
            icon={btnDelete}
          />
        </span>
      </li>
    </>
  )
}

export default TableBody

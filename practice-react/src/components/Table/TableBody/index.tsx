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
}

const TableBody = ({
  name,
  email,
  phone,
  enrollNumber,
  dateOfAdmission
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
        <span><button className='btn-table btn-edit'><img src={btnEdit} /></button></span>
        <span><button className='btn-table btn-delete btn-table-delete'><img src={btnDelete} /></button></span>
      </li>
    </>
  )
}

export default TableBody

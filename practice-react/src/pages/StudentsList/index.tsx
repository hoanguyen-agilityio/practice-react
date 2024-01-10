import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './students-list.css';
import {
  Button,
  Header,
  ModalDelete,
  ModalForm,
  Sidebar,
  TableHeader,
  TableBody
} from '@/components';
import { sort } from '@/assets/Images';
import { apiRequest } from '@/services';

const StudentsList = () => {
  const navigate = useNavigate();
  const [students, setStudent] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await apiRequest(import.meta.env.VITE_STUDENT_API, 'GET');
      setStudent(result)
    }

    getData()
  }, [students])

  // Handle logout
  const handleLogout = (): void => {
    localStorage.removeItem('user');
    navigate('/')
  }

  return (
    <div className='container-page-students-list'>
      <Sidebar
        onClick={handleLogout}
      />
      <div className='container-content'>
        <Header />
        <section className='list-heading'>
          <h2 className='title students-list-heading'>
            Students List
          </h2>
          <Button
            className='btn-sort'
            ariaLabel='Sort the list'
            icon={sort}
            alt='button sort'
          />
          <Button
            className='btn btn-add-student'
            ariaLabel='Add new student'
            name='ADD NEW STUDENT'
          />
        </section>
        <ul className='students-list-table'>
          <TableHeader />
          {students.map((student) => {
            return (
            <TableBody
              id={student.id}
              name={student.name}
              email={student.email}
              phone={student.phone}
              enrollNumber={student.enrollNumber}
              dateOfAdmission={student.dateOfAdmission}
            />
            )
          })}
        </ul>
        <ModalForm />
        <ModalDelete />
      </div>
    </div>
  )
}

export default StudentsList;

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
  TableBody,
  CONFIG
} from '@/components';
import { sort } from '@/assets/Images';
import { apiRequest } from '@/services';
import { validateForm } from '@/validates';
import { PartialStudent } from '@/types';

const StudentsList = () => {
  const navigate = useNavigate();
  const [students, setStudent] = useState([])
  const [isModal, setModal] = useState(false)
  const [contentModal, setContentModal] = useState('');
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    enrollNumber: '',
    dateOfAdmission: ''
  });
  const [errorsMessage, setErrors]= useState({
    name: '',
    email: '',
    phone: '',
    enrollNumber: '',
    dateOfAdmission: ''
  });

  useEffect(() => {
    const getData = async () => {
      const result: PartialStudent[]  = await apiRequest<null, PartialStudent[]>(import.meta.env.VITE_STUDENT_API, 'GET');
      setStudent(result)
    }

    getData()
  }, [])

  // Handle logout
  const handleLogout = (): void => {
    navigate('/')
  }

  const handleShowModal = () => {
    setModal(true)
  }

  const handleHideModal = () => {
    setModal(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  }

  const getDataAndValidate = () => {
    return
  }

  const handleSubmit = async () => {
    const validation = validateForm(fields, CONFIG);

    if (!validation.isValid) {
      setErrors({
        name: validation.errors.name!,
        email: validation.errors.email!,
        phone: validation.errors.phone!,
        enrollNumber: validation.errors.enrollNumber!,
        dateOfAdmission: validation.errors.dateOfAdmission!,
      });

      return;
    }

    try {
      const newStudent = await apiRequest<null, PartialStudent[]>(import.meta.env.VITE_STUDENT_API, 'POST', fields);
      setStudent(currentArticles => [...currentArticles, ...newStudent])

      // update lai students
    } catch (error) {
      alert('An error occurred while creating a new student');
    }
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
            onClick={() => {
              setContentModal('ADD NEW STUDENT')
              handleShowModal()
            }}
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
        {isModal && <ModalForm
          title={contentModal}
          onClick={handleHideModal}
          onChange={handleInputChange}
          onClickSubmit={() => {
            handleSubmit()
            handleHideModal()
          }}
        />}
        <ModalDelete />
      </div>
    </div>
  )
}

export default StudentsList;

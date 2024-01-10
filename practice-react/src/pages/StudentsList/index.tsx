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
import { checkDuplicateData, validateForm } from '@/validates';
import { PartialStudent } from '@/types';
import { EMPTY_TEXT, MESSAGES } from '@/constants';

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
    setErrors({
      name: EMPTY_TEXT,
      email: EMPTY_TEXT,
      phone: EMPTY_TEXT,
      enrollNumber: EMPTY_TEXT,
      dateOfAdmission: EMPTY_TEXT,
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  }

  const checkDuplicate = (arr) => {
    // Check for duplicate emails
		const duplicateEmail = checkDuplicateData(
			arr,
			'email',
			fields.email,
		);

		// Check for duplicate phones
		const duplicatePhone = checkDuplicateData(
			arr,
			'phone',
			fields.phone,
		);

		// Check for duplicate enroll numbers
		const duplicateEnrollNumber = checkDuplicateData(
			arr,
			'enrollNumber',
			fields.enrollNumber,
		);

		let isContinue: boolean = true;

		if (duplicateEmail) {
			isContinue = false;
      setErrors({
        email: MESSAGES.DUPLICATE_EMAIL
      })

			return;
		} else {
			isContinue = true;
      setErrors({
        email: EMPTY_TEXT
      })
		}

		if (duplicatePhone) {
			isContinue = false;
      setErrors({
        phone: MESSAGES.DUPLICATE_PHONE
      })

			return;
		} else {
			isContinue = true;
      setErrors({
        phone: EMPTY_TEXT
      })
		}

		if (duplicateEnrollNumber) {
			isContinue = false;
      setErrors({
        enrollNumber: MESSAGES.DUPLICATE_ENROLL_NUMBER
      })

			return;
		} else {
			isContinue = true;
      setErrors({
        enrollNumber: EMPTY_TEXT
      })
		}

		if (!isContinue) {

			return;
		}

		return isContinue;

  }

  const handleSubmit = async () => {
    const students = await apiRequest(import.meta.env.VITE_STUDENT_API, 'GET');
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
      if (!checkDuplicate(students)) {

        return;
      }

      const newStudent = await apiRequest(import.meta.env.VITE_STUDENT_API, 'POST', fields);

      setStudent(students => [...students, newStudent]);
      handleHideModal();

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
          }}
          errorMessageName={errorsMessage.name}
          errorMessageEmail={errorsMessage.email}
          errorMessagePhone={errorsMessage.phone}
          errorMessageEnrollNumber={errorsMessage.enrollNumber}
          errorMessageDateOfAdmission={errorsMessage.dateOfAdmission}
        />}
        <ModalDelete />
      </div>
    </div>
  )
}

export default StudentsList;

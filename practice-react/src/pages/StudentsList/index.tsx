import {
  useState,
  useEffect
} from 'react';
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
  CONFIG,
  Loader,
} from '@/components';
import { sort } from '@/assets/Images';
import { apiRequest } from '@/services';
import {
  checkDuplicateData,
  validateForm
} from '@/validates';
import {
  PartialStudent,
  Student
} from '@/types';
import {
  EMPTY_TEXT,
  MESSAGES
} from '@/constants';

const StudentsList = () => {
  const navigate = useNavigate();
  const [students, setStudent] = useState<PartialStudent[]>([]);
  const [isModal, setModal] = useState(false);
  const [contentModal, setContentModal] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [fields, setFields] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    enrollNumber: '',
    dateOfAdmission: '',
  });
  const [errorsMessage, setErrors] = useState<PartialStudent>({
    name: '',
    email: '',
    phone: '',
    enrollNumber: '',
    dateOfAdmission: '',
  });

  useEffect(() => {
    const getData = async () => {
      const result: PartialStudent[] = await apiRequest<null, PartialStudent[]>(
        import.meta.env.VITE_STUDENT_API,
        'GET',
      );
      if (result) {
        setStudent(result);

        return;
      }

      alert(
        'Cannot display student list. Because the data cannot be retrieved from the database.',
      );
    };

    getData();
  }, []);

  /**
   * Handle logout
   */
  const handleLogout = (): void => {
    localStorage.removeItem('user');
    navigate('/');
  };

  /**
   * Handle show modal
   */
  const handleShowModal = () => {
    setModal(!isModal);
  };

  /**
   * Handle hide modal
   */
  const handleHideModal = () => {
    setModal(!isModal);
    setErrors({
      name: EMPTY_TEXT,
      email: EMPTY_TEXT,
      phone: EMPTY_TEXT,
      enrollNumber: EMPTY_TEXT,
      dateOfAdmission: EMPTY_TEXT,
    });
  };

  /**
   * Handle input change
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Value of input
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    setDisabled(true);
  };

  /**
   * Handle check duplicate data
   *
   * @param {Array[]} arr - The array contains the list of students
   */
  const checkDuplicate = (arr: PartialStudent[]) => {
    // Check for duplicate emails
    const duplicateEmail = checkDuplicateData(arr, 'email', fields.email);

    // Check for duplicate phones
    const duplicatePhone = checkDuplicateData(arr, 'phone', fields.phone);

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
        email: MESSAGES.DUPLICATE_EMAIL,
      });

      return;
    } else {
      isContinue = true;
      setErrors({
        email: EMPTY_TEXT,
      });
    }

    if (duplicatePhone) {
      isContinue = false;
      setErrors({
        phone: MESSAGES.DUPLICATE_PHONE,
      });

      return;
    } else {
      isContinue = true;
      setErrors({
        phone: EMPTY_TEXT,
      });
    }

    if (duplicateEnrollNumber) {
      isContinue = false;
      setErrors({
        enrollNumber: MESSAGES.DUPLICATE_ENROLL_NUMBER,
      });

      return;
    } else {
      isContinue = true;
      setErrors({
        enrollNumber: EMPTY_TEXT,
      });
    }

    if (!isContinue) {
      return;
    }

    return isContinue;
  };

  const validation = validateForm(fields, CONFIG);

  /**
   * Handle setErrors of useState
   */
  const handleSetErrors = () => {
    setErrors({
      name: validation.errors.name,
      email: validation.errors.email,
      phone: validation.errors.phone,
      enrollNumber: validation.errors.enrollNumber,
      dateOfAdmission: validation.errors.dateOfAdmission,
    });
  }

  /**
   * Handle add new student
   */
  const handleAddNewStudent = async () => {
    if (!validation.isValid) {
      handleSetErrors();

      return;
    }

    try {
      if (!checkDuplicate(students)) {

        return;
      }

      const newStudent: PartialStudent = await apiRequest(
        import.meta.env.VITE_STUDENT_API,
        'POST',
        fields,
      );
      handleHideModal();

      // Show loader
      setLoading(true);
      setTimeout(() => {
        // Hide loader
        setLoading(false);

        // update lai students
        setStudent((students) => [...students, newStudent]);
      }, 3000);
    } catch (error) {
      alert('An error occurred while creating a new student');
    }
  };

  /**
   * Handle submit form
   */
  const handleSubmit = async () => {
    if (fields.id) {
      handleUpdateStudent();
    } else {
      handleAddNewStudent();
    }
  };

  return (
    <div className='container-page-students-list'>
      <Sidebar onClick={handleLogout} />
      <div className='container-content'>
        <Header />
        <section className='list-heading'>
          <h2 className='title students-list-heading'>Students List</h2>
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
              setContentModal('ADD NEW STUDENT');
              handleShowModal();
            }}
          />
        </section>
        <ul className='students-list-table'>
          <TableHeader />
          {students.map((student: Student) => {
            return (
              <TableBody
                id={student.id}
                name={student.name}
                email={student.email}
                phone={student.phone}
                enrollNumber={student.enrollNumber}
                dateOfAdmission={student.dateOfAdmission}
              />
            );
          })}
        </ul>
        {isModal && (
          <ModalForm
            title={contentModal}
            onClose={handleHideModal}
            onChange={handleInputChange}
            onClickSubmit={handleSubmit}
            errors={errorsMessage}
          />
        )}
        <ModalDelete />
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default StudentsList;

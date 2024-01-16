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
  const [fields, setFields] = useState<Student>({
    id: EMPTY_TEXT,
    name: EMPTY_TEXT,
    email: EMPTY_TEXT,
    phone: EMPTY_TEXT,
    enrollNumber: EMPTY_TEXT,
    dateOfAdmission: EMPTY_TEXT,
  });
  const [errorsMessage, setErrors] = useState<PartialStudent>({
    name: EMPTY_TEXT,
    email: EMPTY_TEXT,
    phone: EMPTY_TEXT,
    enrollNumber: EMPTY_TEXT,
    dateOfAdmission: EMPTY_TEXT,
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
   * Handles show or hide modal
   */
  const handleToggleModal = () => {
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
    setDisabled(!disabled);
  };

  // Handle reset form
  const handleResetForm = () => {
    setFields({
      id: EMPTY_TEXT,
      name: EMPTY_TEXT,
      email: EMPTY_TEXT,
      phone: EMPTY_TEXT,
      enrollNumber: EMPTY_TEXT,
      dateOfAdmission: EMPTY_TEXT,
    });
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
  };

  /**
   * Handle show form update student
   *
   * @param {string} id - id of the object containing the student
   */
  const onClickButtonEdit = async (id: string) => {
    const studentApi = import.meta.env.VITE_STUDENT_API;
    const data: Student = await apiRequest(`${studentApi}/${id}`, 'GET');

    setFields({
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      enrollNumber: data.enrollNumber,
      dateOfAdmission: data.dateOfAdmission,
    });

    handleToggleModal();
  };

  /**
   * Handle submit
   */
  const handleSubmit = async () => {
    if (!validation.isValid) {
      handleSetErrors();

      return;
    }

    // Handle update student
    if (fields.id) {
      const students: PartialStudent[] = await apiRequest(
        import.meta.env.VITE_STUDENT_API,
        'GET',
      );
      const newStudentsList: PartialStudent[] = students.filter(
        (student: PartialStudent) => {
          return student.id !== fields.id;
        },
      );

      if (!validation.isValid) {
        handleSetErrors();

        return;
      }

      try {
        if (!checkDuplicate(newStudentsList)) {

          return;
        }

        const student: Student = await apiRequest(
          `${import.meta.env.VITE_STUDENT_API}/${fields.id}`,
          'PUT',
          fields,
        );
        handleToggleModal();

        // Show loader
        setLoading(true);
        setTimeout(() => {
          // Hide loader
          setLoading(false);

          // update lai students
          setStudent((students) =>
            students.map((st) => {
              if (st.id === student.id) {

                return student;
              }

              return st;
            }),
          );
        }, 3000);
      } catch (error) {
        alert('Something went wrong while updating the student');
      }
      // Handle add new student
    } else {
      try {
        if (!checkDuplicate(students)) {

          return;
        }

        const newStudent: PartialStudent = await apiRequest(
          import.meta.env.VITE_STUDENT_API,
          'POST',
          fields,
        );
        handleToggleModal();

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
              handleToggleModal();
            }}
          />
        </section>
        <ul className='students-list-table'>
          <TableHeader />
          {students.map((student: PartialStudent) => {
            return (
              <TableBody
                id={student.id as string}
                name={student.name as string}
                email={student.email as string}
                phone={student.phone as string}
                enrollNumber={student.enrollNumber as string}
                dateOfAdmission={student.dateOfAdmission as string}
                onClickButtonEdit={(id) => {
                  setContentModal('UPDATE STUDENT');
                  onClickButtonEdit(id);
                }}
              />
            );
          })}
        </ul>
        {isModal && (
          <ModalForm
            title={contentModal}
            onClose={() => {
              handleResetForm();
              handleToggleModal();
            }}
            onChange={handleInputChange}
            onClickSubmit={handleSubmit}
            errors={errorsMessage}
            valueInput={fields}
          />
        )}
        <ModalDelete />
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default StudentsList;

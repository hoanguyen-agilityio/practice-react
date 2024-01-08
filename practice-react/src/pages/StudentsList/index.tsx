import { useNavigate } from 'react-router-dom';
import './students-list.css';
import {
  Button,
  Header,
  ModalDelete,
  ModalForm,
  Sidebar
} from '@/components';
import { sort } from '@/assets/Images';

const StudentsList = () => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = (): void => {
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
        <ul className='students-list-table'></ul>
        <ModalForm />
        <ModalDelete />
      </div>
    </div>
  )
}

export default StudentsList;

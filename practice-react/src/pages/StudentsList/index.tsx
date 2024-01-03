import './students-list.css'
import {
  Button,
  Header,
  Loader,
  ModalDelete,
  ModalForm,
  Sidebar
} from '../../components'
import { sort } from '../../assets/Images'

const StudentsList = () => {
  return (
    <div className='container-page-students-list'>
      <Sidebar />
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
        <Loader />
      </div>
    </div>
  )
}

export default StudentsList

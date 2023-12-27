import Profile from "../../components/profile"
import Sidebar from "../../sidebar"
import { avatar } from "../../assets/images"

const StudentsList = () => {
  return (
    <Sidebar>
      <Profile
        title='CRUD OPERATIONS'
        avatar= {avatar}
        alt='avatar'
        userName='Karthi Madesh'
        description='Admin'
      />
    </Sidebar>
  )
}

export default StudentsList

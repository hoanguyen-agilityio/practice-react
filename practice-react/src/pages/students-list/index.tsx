import './students-list.css'
import Profile from '../../components/profile'
import Sidebar from '../../components/sidebar'
import {
  avatar,
  report,
  setting,
  home,
  course,
  graduation,
  payment,
  logout
} from '../../assets/images'
import Menu from '../../components/menu'
import MenuItem from '../../components/menu/menu-item'
import ButtonLogout from '../../components/button/button-logout'

const StudentsList = () => {
  return (
    <div className='container-page-students-list'>
      <Sidebar>
        <Profile
          title='CRUD OPERATIONS'
          avatar= {avatar}
          alt='avatar'
          userName='Karthi Madesh'
          description='Admin'
        />
        <aside className='sub-sidebar-content'>
          <Menu>
            <MenuItem
              icon={home}
              name='Home'
              alt='icon home'
              ariaLabel='Go to home page'
            />
            <MenuItem
              icon={course}
              name='Course'
              alt='icon Course'
              ariaLabel='Go to course page'
            />
            <MenuItem
              icon={graduation}
              name='Students'
              alt='icon Students'
              ariaLabel='Go to student page'
            />
            <MenuItem
              icon={payment}
              name='Payment'
              alt='icon Payment'
              ariaLabel='Go to payment page'
            />
            <MenuItem
              icon={report}
              name='Report'
              alt='icon Report'
              ariaLabel='Go to report page'
            />
            <MenuItem
              icon={setting}
              name='Settings'
              alt='icon Settings'
              ariaLabel='Go to setting page'
            />
          </Menu>
          <ButtonLogout
            icon={logout}
            name='Logout'
            ariaLabel='logout'
          />
        </aside>
      </Sidebar>
    </div>
  )
}

export default StudentsList

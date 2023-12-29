import './sidebar.css'
import Menu from '../menu'
import ButtonLogout from '../button/button-logout'
import { avatar, logout } from '../../assets/images'
import Profile from '../profile'


const Sidebar = () => {
  return (
    <div className='container-sidebar'>
      <main className='main-sidebar hide-sidebar' id='mainsidebar'>
      <Profile
          title='CRUD OPERATIONS'
          avatar= {avatar}
          alt='avatar'
          userName='Karthi Madesh'
          description='Admin'
        />
        <aside className='sub-sidebar-content'>
          <Menu />
          <ButtonLogout
              icon={logout}
              name='Logout'
              ariaLabel='logout'
            />
        </aside>
      </main>
    </div>
  )
}

export default Sidebar

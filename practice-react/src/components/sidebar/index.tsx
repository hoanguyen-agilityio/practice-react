import './sidebar.css'
import {
  Menu,
  Profile,
  Button
} from '..'
import {
  avatar,
  logout
} from '../../assets/images'

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
          <div className='navigation'>
            <Button className='btn-logout' ariaLabel='logout' name='Logout' icon={logout} />
          </div>
        </aside>
      </main>
    </div>
  )
}

export default Sidebar

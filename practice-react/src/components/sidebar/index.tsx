import './sidebar.css';
import {
  Menu,
  Profile,
  Button
} from '..';
import {
  avatar,
  logout
} from '../../assets/Images';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = (): void => {
    navigate('/')
  }

  return (
    <div className='container-sidebar'>
      <aside
        className='main-sidebar hide-sidebar'
        id='mainsidebar'>
        <Profile
          title='CRUD OPERATIONS'
          avatar= {avatar}
          alt='avatar'
          userName='Karthi Madesh'
          description='Admin'
        />
        <div className='sub-sidebar-content'>
          <Menu />
          <div className='navigation'>
            <Button
              className='btn-logout'
              ariaLabel='logout'
              name='Logout'
              icon={logout}
              classNameIcon='btn-logout-icon'
              onClick={handleLogout}
            />
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar;

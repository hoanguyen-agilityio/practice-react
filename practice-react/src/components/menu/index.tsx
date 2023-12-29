import { MENULIST } from '../constants/data'
import MenuItem from './menu-item'

const Menu = () => {
  return (
    <ul className='sub-sidebar-list'>
      <MenuItem menuList={MENULIST}/>
    </ul>
  )
}

export default  Menu

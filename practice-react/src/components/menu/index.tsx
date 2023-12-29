import {
  MenuItem,
  MENULIST
} from '..'

const Menu = () => {
  return (
    <ul className='sub-sidebar-list'>
      <MenuItem menuList={MENULIST}/>
    </ul>
  )
}

export default  Menu

import {
  MenuItem,
  MENU_LIST
} from '..'

const Menu = () => {
  return (
    <ul className='sub-sidebar-list'>
      {MENU_LIST.map(({ icon, name, alt, ariaLabel, href }) => {
        return (
          <MenuItem
            icon={icon}
            name={name}
            ariaLabel={ariaLabel}
            alt={alt}
            href={href}
          />
        )
      })}
    </ul>
  )
}

export default  Menu

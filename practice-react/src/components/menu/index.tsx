import { ReactNode } from 'react'

interface IMenu {
  children: ReactNode,
}

const Menu = ({ children } :IMenu) => {
  return (
    <ul className='sub-sidebar-list'>
      {children}
    </ul>
  )
}

export default  Menu

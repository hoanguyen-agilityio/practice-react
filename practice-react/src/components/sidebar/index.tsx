import { ReactNode } from 'react'
import './sidebar.css'

interface ISidebar {
  children: ReactNode
}

const Sidebar = ({children} :ISidebar) => {
  return (
    <div className='container-sidebar'>
      <main className='main-sidebar hide-sidebar' id='mainsidebar'>
        {children}
      </main>
    </div>
  )
}

export default Sidebar

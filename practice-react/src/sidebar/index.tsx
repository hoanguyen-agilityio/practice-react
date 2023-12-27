import { ReactNode } from "react"

interface ISidebar {
  children: ReactNode
}

const Sidebar = ({children} :ISidebar) => {
  return (
     <main>
      {children}
     </main>
  )
}

export default Sidebar

interface IMenuItem {
  icon: string
  name: string
  alt: string
  ariaLabel: string
  href: string
}
interface IMenuList {
  menuList: IMenuItem[]
}


const MenuItem = ({menuList}: IMenuList) => {
  return (
    <>
      {menuList.map(({icon, name, alt, ariaLabel, href} :IMenuItem) => {
        return (
          <li>
            <a href={href} aria-label={ariaLabel}>
              <img src={icon} alt={alt} />
              {name}
            </a>
          </li>
        )
      })}
    </>
  )

}

export default MenuItem

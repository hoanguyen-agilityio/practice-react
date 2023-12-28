interface IMenuItem {
  icon: string
  name: string
  alt: string
  ariaLabel: string
}

const MenuItem = ({ icon, name, alt, ariaLabel } :IMenuItem) => {
  return (
    <li>
        <a href='javascript:void(0);' aria-label={ariaLabel}>
          <img src={icon} alt={alt} />
          {name}
        </a>
    </li>
  )
}

export default MenuItem

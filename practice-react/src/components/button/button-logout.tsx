interface IButtonLogout {
  name: string,
  icon: string,
  ariaLabel: string
}

const ButtonLogout = ({ name, icon, ariaLabel} :IButtonLogout) => {
  return (
    <div className='navigation'>
      <button className="btn-logout" aria-label={ariaLabel}>
        {name}<img src={icon} className='btn-logout-icon' />
      </button>
    </div>
  )
}

export default ButtonLogout

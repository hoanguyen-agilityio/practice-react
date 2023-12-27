import './profile.css'

interface IProfile {
  title: string,
  avatar: string,
  alt: string,
  userName: string,
  description: string
}

const Profile = ({ title, avatar, alt, userName, description } :IProfile) => {
  return (
    // profile
    <div className='profile'>
      <h1 className='heading'>{title}</h1>
      <img
        src={avatar}
        alt={alt}
        className='avatar-user'
      />
      <p className='user-name'>{userName}</p>
      <span className='user-rights'>{description}</span>
    </div>
  )
}

export default Profile

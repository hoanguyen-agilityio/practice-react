import { Avatar } from "../App";

const Card = ({ children }) => {
  return (
    <div className='card'>
      {children}
    </div>
  );
}

const Profile = () => {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

export default Profile

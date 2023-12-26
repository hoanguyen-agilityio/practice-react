import './App.css'
import Profile from './MainConcept/Pass-props-to-component.tsx'
import GalleryMemory from './components/memory.tsx'
import Video from './components/video.tsx'

function App() {

  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <Avatar />
      <TodoList/>
      <Profile />
      <GalleryMemory />
      <Video />
    </>
  )
}

export default App

export const  Avatar = () =>{
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}

const today = new Date();

const formatDate = (date) => {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export const TodoList = () => {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}

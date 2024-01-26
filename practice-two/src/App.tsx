import './App.css';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    console.log('thanh cong');
  }
  return (
    <>
      <Button
        type='default'
        label='Login'
        custom='pt-17px pb-17px pl-204px pr-204px'
        onClick={handleClick} iconClasses={''}      />
    </>
  )
}

export default App;

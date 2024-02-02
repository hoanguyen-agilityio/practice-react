import './App.css';
import { Header } from './components';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='max-w-1440px mt-5 mx-auto'>
      <Header />
      <body className='pl-36 pt-36'>
        <Sidebar />
      </body>
    </div>
  )
}

export default App;

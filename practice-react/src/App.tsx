import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import StudentsList from './pages/StudentsList';
import ProtectedRoute from './HOCs/WithAuth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <LoginPage/>
          }
        />
        <Route
          path='/students-list'
          element={
            <ProtectedRoute>
              <StudentsList/>
            </ProtectedRoute>

          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

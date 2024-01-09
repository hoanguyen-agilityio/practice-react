import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
  isLoggedIn: Boolean;
}

const ProtectedRoute = ({
  children,
  isLoggedIn
} :IProps) => {
  const user = localStorage.getItem('user')
  isLoggedIn = false
  if (!isLoggedIn && !user) {
    return <Navigate to='/' replace />;
  }

  return children
}

export default ProtectedRoute;

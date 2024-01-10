import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  isLoggedIn: Boolean;
}

const ProtectedRoute = ({
  children
} :IProps) => {
  const user = localStorage.getItem('user')

  if (!user) {
    return <Navigate to='/' replace />;
  }

  return children
}

export default ProtectedRoute;

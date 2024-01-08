import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children } :IProps) => {
  const user = localStorage.getItem('user')

  if (user) {
    return <Navigate to='/students-list' replace />;
  }

  return children;
}

export default ProtectedRoute;

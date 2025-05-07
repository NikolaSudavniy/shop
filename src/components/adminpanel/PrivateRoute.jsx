import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === undefined) return null;

  return isAuthenticated ? children || <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;

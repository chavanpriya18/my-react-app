import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles, userRole }) => {
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
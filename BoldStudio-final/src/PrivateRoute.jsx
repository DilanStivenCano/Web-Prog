import { Navigate } from "react-router-dom";
import { useAuth } from "./auth/hooks/useAuth";

export function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
}

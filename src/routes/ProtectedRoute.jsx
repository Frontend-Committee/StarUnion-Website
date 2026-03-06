import { Navigate, Outlet, useLocation } from "react-router-dom";
import {useAuth} from "../hooks/useAuth"
export default function ProtectedRoute() {
  const location = useLocation();
  
  // const token = localStorage.getItem("token");
  // const isAuth = Boolean(token);
  const {loggedIn} = useAuth()
  if (!loggedIn) {
    return (
      <Navigate
        to="/auth/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <Outlet />;
}
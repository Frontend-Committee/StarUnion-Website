import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoute() {
  const token = localStorage.getItem("token");
  const isAuth = Boolean(token);

  if (isAuth) {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
}
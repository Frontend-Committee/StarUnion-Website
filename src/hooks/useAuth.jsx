import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); 
  const token = auth?.token || null;
  const loggedIn = auth?.loggedIn || false;

  const loginUser = (tokenValue) => dispatch(login(tokenValue));
  const logoutUser = () => dispatch(logout());

  return { token, loggedIn, loginUser, logoutUser };
};
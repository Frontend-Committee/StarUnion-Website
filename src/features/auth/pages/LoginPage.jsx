import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm";
export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const to = "/profile";


  const fakeLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  return (
    <div>
            <h1 className="gradient-content">
              Star Union
            </h1>
            <LoginForm />
    </div>
  );
}
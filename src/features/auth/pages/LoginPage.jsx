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
            <h1 className="text-3xl font-bold bg-gradient-to-t from-[#4D3398] via-[#452798] via-[#6D44E2] to-[#1E1A2B] bg-clip-text text-transparent">
              Star Union
            </h1>
            <LoginForm />
    </div>
  );
}
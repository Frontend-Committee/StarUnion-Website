import { useNavigate, useLocation } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const to =  "/profile";

  const fakeLogin = () => {
    localStorage.setItem("token", "123");
    navigate(to, { replace: true });
  };

  const fakeLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h2>Login Page (TEST)</h2>

      <button onClick={fakeLogin}>Fake Login</button>
      <button onClick={fakeLogout} style={{ marginLeft: 8 }}>
        Fake Logout
      </button>
    </div>
  );
}
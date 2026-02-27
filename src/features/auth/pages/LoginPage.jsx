import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Logo from './../../../assets/icons/StarLogo.png';
import bg from '../../../assets/images/WhatsApp Image 2026-02-23 at 3.23.19 PM 1.png';


export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const to =  "/profile";

  

  const fakeLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <div>


       <div
  className="bg-center bg-no-repeat h-screen bg-cover relative"
  style={{ backgroundImage: `url(${bg})`}}
>
  <div className="layout absolute top-0 start-0 bottom-0 end-0 bg-[#7441FF] bg-opacity-40 flex items-center justify-center text-center">
  <div className="icon absolute top-[2%] start-[5%]">
    <img
      src={Logo}
      className="rounded-full size-10"
      alt="Star Logo"
      />
  </div>


  <div className="bg-white p-4 rounded-md shadow opacity-90">
<h1 className="text-4xl bg-gradient-to-t from-[#7441FF] to-[#C8B5FC] bg-clip-text text-transparent font-extrabold">
  Star Union
</h1>
<LoginForm />
  </div>
      </div>

  {/* <button onClick={fakeLogout} className="ml-2">
    Fake Logout
  </button> */}
</div>
</div>
  );
}
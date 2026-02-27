import { Link } from "react-router-dom";
import emailLogo from "./../../../assets/icons/Vector.png"
import passLogo from "./../../../assets/icons/Vector (1).png"
function LoginForm() {
    const fakeLogin = () => {
    localStorage.setItem("token", "123");
    navigate(to, { replace: true });
  };
  return (
    <form className="w-[400px] mx-auto py-6 px-1">
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="flex items-center gap-2 text-[#7441FF] font-medium mb-1">
          <img src={emailLogo} alt="Email Icon" className="size-5"/>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="user-email"
          
          className="p-2 rounded-md outline-none focus:ring-0 bg-[#7441FF] text-white"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="pass" className="flex items-center text-[#7441FF] font-medium mb-1">
          <img src={passLogo} alt="Password Icon" className="size-5"/>
            Password
        </label>
        <input
          type="password"
          id="pass"
          name="password"
          className="text-white p-2 rounded-md outline-none focus:ring-0 bg-[#7441FF]"
        />
      </div>

      <div className="text-sm text-[#7441FF] mb-4">
        <p>Forgot Password? <Link to={"/auth/forgot-password"} className="underline">Forgot</Link></p>
        <p>Don't have an Account? <Link to={"/auth/register"} className="underline">Register</Link></p>
      </div>

      <button
        onClick={fakeLogin}
        type="submit"
        className="w-1/3 py-2 bg-[#7441FF] text-white font-semibold rounded-md"
      >
        Log In
      </button>
    </form>
  );
}
export default LoginForm

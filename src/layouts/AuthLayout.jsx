import { Outlet } from "react-router-dom";
import Logo from '../assets/icons/StarLogo.png';
import bg from '../assets/images/WhatsApp Image 2026-02-23 at 3.23.19 PM 1.png';

export default function AuthLayout({ children}) {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 relative">
        <div
          className="bg-center bg-no-repeat h-screen bg-cover relative"
          style={{ backgroundImage: `url(${bg})` }}
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#452798] bg-opacity-40 flex items-center justify-center text-center">
          <div className="icon absolute top-[2%] left-[5%]">
            <img src={Logo} alt="Logo" className="rounded-full size-12 shadow" />
          </div>

          <div className="bg-white/60 p-4 rounded-md shadow">
            {children ||    <Outlet/> }
          </div>
        </div>
      </main>

    </div>
  );
}
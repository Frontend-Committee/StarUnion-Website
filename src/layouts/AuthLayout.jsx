import { Outlet } from "react-router-dom";
import Logo from '../assets/icons/StarLogo.png';
import bg from '../assets/images/WhatsApp Image 2026-02-23 at 3.23.19 PM 1.png';

export default function AuthLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 relative">
        {/* Background image as <img> for native sharpness */}
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ imageRendering: "auto" }}
        />

        {/* Overlay + content */}
        <div className="absolute inset-0 bg-[#311f62]/60 flex items-center justify-center p-4 py-8 overflow-auto">
          <div className="icon absolute top-8 left-8">
            <img src={Logo} alt="Logo" className="rounded-full size-12 shadow-lg hover:scale-105 transition-transform" />
          </div>

          {children || <Outlet />}
        </div>
      </main>
    </div>
  );
}
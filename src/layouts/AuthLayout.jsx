import { Link, Outlet } from "react-router-dom";
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

        {/* Overlay + content container with improved scrolling */}
        <div className="absolute inset-0 bg-[#311f62]/60 overflow-y-auto overflow-x-hidden">
          <div className="min-h-full flex flex-col items-center justify-start md:justify-center p-4 py-20 md:py-10">
            <Link to="/" className="fixed md:absolute top-6 left-6 md:top-8 md:left-8 cursor-pointer z-50">
              <img src={Logo} alt="Logo" className="rounded-full size-11 md:size-12 shadow-lg hover:scale-110 transition-transform active:scale-95 bg-white/10 backdrop-blur-sm" />
            </Link>

            <div className="w-full flex justify-center mt-4">
              {children || <Outlet />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import { Link, Outlet, useNavigation } from "react-router-dom";
import Logo from "../assets/icons/StarLogo.png";
import bg from "../assets/images/WhatsApp Image 2026-02-23 at 3.23.19 PM 1.png";
import LoadingSpinner from "../components/ui/LoadingSpinneer";

export default function AuthLayout({ children }) {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div className="relative flex flex-col min-h-screen">
      {isNavigating && <LoadingSpinner fullScreen={true} />}

      <main
        className={`flex-1 relative ${isNavigating ? "opacity-50 pointer-events-none" : "opacity-100"}`}
      >
        {/* Background image as <img> for native sharpness */}
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 object-cover object-center w-full h-full"
          style={{ imageRendering: "auto" }}
        />

        {/* Overlay + content container with improved scrolling */}
        <div className="absolute inset-0 bg-[#311f62]/60 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col items-center justify-start min-h-full p-4 py-20 md:justify-center md:py-10">
            <Link
              to="/"
              className="fixed z-50 cursor-pointer md:absolute top-6 left-6 md:top-8 md:left-8"
            >
              <img
                src={Logo}
                alt="Logo"
                className="transition-transform rounded-full shadow-lg size-11 md:size-12 hover:scale-110 active:scale-95 bg-white/10 backdrop-blur-sm"
              />
            </Link>

            <div className="flex justify-center w-full mt-4">
              {children || <Outlet />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

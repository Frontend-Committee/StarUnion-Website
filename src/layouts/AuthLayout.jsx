import { Link, Outlet, useNavigation } from "react-router-dom";
import Logo from "../assets/icons/StarLogo.png";
import LoadingSpinner from "../components/ui/LoadingSpinneer";

export default function AuthLayout({ children }) {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div className="relative flex flex-col min-h-screen starry-night-bg">
      <div className="shooting-stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isNavigating && <LoadingSpinner fullScreen={true} />}

      <main
        className={`flex-1 relative ${isNavigating ? "opacity-50 pointer-events-none" : "opacity-100"}`}
      >

        {/* Overlay + content container with improved scrolling */}
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
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

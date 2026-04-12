import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";
import LoadingSpinner from "../components/ui/LoadingSpinneer";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function MainLayout() {
  const navigation = useNavigation();
  const location = useLocation();
  const isNavigating = navigation.state === "loading";
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const isScrollable = scrollHeight > windowHeight;
      const isAtBottom = windowHeight + scrollY >= scrollHeight - 10;

      setShowArrow(isScrollable && !isAtBottom);
    };

    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

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

      <ScrollTop />

      <Navbar />
      <main
        className={`flex-1 ${isNavigating ? "opacity-50 pointer-events-none " : "opacity-100"}`}
      >
        <Outlet />
      </main>
      <Footer />

      {showArrow && (
        <div
          className="fixed z-50 text-3xl text-white transition-opacity -translate-x-1/2 cursor-pointer bottom-10 left-1/2 opacity-80 hover:opacity-100"
          style={{ animation: "smoothBounce 3s infinite ease-in-out" }}
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <MdOutlineKeyboardArrowDown
            className="text-primary hover:text-tertiary drop-shadow-[0_0_5px_rgba(116,65,255,0.4)] hover:drop-shadow-[0_0_15px_rgba(239,216,48,1)] hover:scale-125 transition-all duration-300"
            style={{ animation: "bounceEffect 2s infinite ease-in-out" }}
          />
        </div>
      )}
    </div>
  );
}

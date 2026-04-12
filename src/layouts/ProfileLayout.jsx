import { Outlet, useNavigation } from "react-router-dom";
import ScrollTop from "../components/common/ScrollTop";
import Footer from "@/components/common/Footer";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ProfileLayout() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";
  const location = useLocation();

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
    <div className="relative min-h-screen starry-night-bg">
      {isNavigating && <LoadingSpinner fullScreen={true} />}

      <ScrollTop />

      <div
        className={
          isNavigating ? "opacity-50 pointer-events-none " : "opacity-100"
        }
      >
        {/* <div className="container px-6 py-8"> */}

        <Outlet />
        {/* </div> */}
      </div>
      {showArrow && (
        <div
          className="fixed z-50 text-3xl text-white transition-opacity -translate-x-1/2 cursor-pointer bottom-10 left-1/2 opacity-80 hover:opacity-100"
          style={{ animation: "smoothBounce 3s infinite ease-in-out" }}
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <MdOutlineKeyboardArrowDown
            className="text-secondary hover:text-tertiary drop-shadow-[0_0_5px_rgba(116,65,255,0.4)] hover:drop-shadow-[0_0_15px_rgba(239,216,48,1)] hover:scale-125 transition-all duration-300"
            style={{ animation: "bounceEffect 2s infinite ease-in-out" }}
          />
        </div>
      )}
    </div>
  );
}

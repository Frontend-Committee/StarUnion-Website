import { useCallback, useEffect, useRef, useState } from "react";

const ScrollArrow = ({ direction = "right" }) => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
    />
  </svg>
);

/**
 * A reusable horizontal scroller with functional arrows for mobile and desktop.
 * centralizes the "Reach the Stars" scroll aesthetic.
 */
export default function HorizontalScrollSection({ children, className = "", mobileOnly = false }) {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setShowLeft(el.scrollLeft > 20);
    setShowRight(maxScrollLeft - el.scrollLeft > 20);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateArrows();
    const onResize = () => updateArrows();
    const resizeObserver = new ResizeObserver(updateArrows);
    resizeObserver.observe(el);
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
    };
  }, [updateArrows]);

  const scrollByAmount = (direction) => {
    const el = containerRef.current;
    if (!el) return;
    // Scroll by roughly one card or a fixed amount
    el.scrollBy({ left: direction * 300, behavior: "smooth" });
  };

  return (
    <div className="relative group/scroll px-1 overflow-visible">
      <div
        ref={containerRef}
        className={`flex gap-5 pt-4 pb-8 overflow-x-auto scrollbar-hide px-4 -mx-4 ${className}`}
      >
        {children}
      </div>
      
      {/* Scroll Arrows - Desktop */}
      {!mobileOnly && (
        <div className="hidden md:block">
          {showLeft && (
            <button
              type="button"
              onClick={() => scrollByAmount(-1)}
              aria-label="Scroll left"
              className="absolute -left-5 top-[calc(50%-1.5rem)] -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-[#452798]/90 text-white shadow-xl backdrop-blur-md hover:bg-[#683CE3] transition-all flex items-center justify-center group-hover/scroll:scale-110"
            >
              <ScrollArrow direction="left" />
            </button>
          )}
          {showRight && (
            <button
              type="button"
              onClick={() => scrollByAmount(1)}
              aria-label="Scroll right"
              className="absolute -right-5 top-[calc(50%-1.5rem)] -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-[#452798]/90 text-white shadow-xl backdrop-blur-md hover:bg-[#683CE3] transition-all flex items-center justify-center group-hover/scroll:scale-110"
            >
              <ScrollArrow direction="right" />
            </button>
          )}
        </div>
      )}

      {/* Mobile-only functional arrow */}
      <div className="md:hidden">
        {showRight && (
           <button
             onClick={() => scrollByAmount(1)}
             className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#452798]/60 backdrop-blur-md flex items-center justify-center text-white shadow-lg animate-pulse z-30 active:scale-90 transition-transform"
             aria-label="Scroll right"
           >
              <ScrollArrow direction="right" />
           </button>
        )}
      </div>
    </div>
  );
}

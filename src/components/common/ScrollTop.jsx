import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const el = document.scrollingElement || document.documentElement;
      el.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }, [pathname]);

  return null;
}
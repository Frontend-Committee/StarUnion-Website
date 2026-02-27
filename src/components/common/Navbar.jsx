import { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import StarLogo from "../../assets/icons/StarLogo.png";

import home from "../../assets/icons/home.png";
import about from "../../assets/icons/about.png";
import committees from "../../assets/icons/committees.png";
import high from "../../assets/icons/high.png";
import services from "../../assets/icons/services.png";
import contact from "../../assets/icons/contact.png";

export default function Navbar() {
  const navigate = useNavigate();
  const isAuth = Boolean(localStorage.getItem("token"));
  const [open, setOpen] = useState(false);

  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  })();

  const close = () => setOpen(false);

  const handleLogin = () => navigate(`${PATHS.AUTH}/${PATHS.AUTH_PAGES.LOGIN}`);
  const handleProfile = () => navigate(PATHS.PROFILE);

  const navLinkClass = ({ isActive }) =>
    [
      "text-sm font-medium transition-colors duration-200",
      isActive ? "text-yellow-300" : "text-white/90 hover:text-white",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "flex items-center gap-4 px-2 py-3 text-[15px] leading-none transition",
      isActive ? "text-yellow-300" : "text-white/90 hover:text-white",
    ].join(" ");

  const mobileItems = useMemo(
    () => [
      {
        to: "/",
        label: "Home",
        icon: (
          <img
            src={home}
            alt=""
            className="w-4 h-4 brightness-0 invert opacity-90"
          />
        ),
      },
      {
        to: `/${PATHS.PUBLIC.ABOUT}`,
        label: "About Us",
        icon: (
          <img
            src={about}
            alt=""
            className="w-4 h-4 brightness-0 invert opacity-90"
          />
        ),
      },
      {
        to: `/${PATHS.PUBLIC.COMMITTEES}`,
        label: "Committees",
        icon: (
          <img
            src={committees}
            alt=""
            className="w-4 h-4 brightness-0 invert opacity-90"
          />
        ),
      },
      {
        to: `/${PATHS.PUBLIC.BOARD_HIGH}`,
        label: "High-Board",
        icon: (
          <img
            src={high}
            alt=""
            className="w-4 h-4 brightness-0 invert opacity-90"
          />
        ),
      },
      {
        to: `/${PATHS.PUBLIC.SERVICES}`,
        label: "Services",
        icon: (
          <img
            src={services}
            alt=""
            className="w-4 h-4 brightness-0 invert opacity-90"
          />
        ),
      },
      {
        to: `/${PATHS.PUBLIC.CONTACT}`,
        label: "Contact Us",
        icon: (
          <img
            src={contact}
            alt=""
            className="w-4 h-4 brightness-0 invert opacity-90"
          />
        ),
      },
    ],
    [],
  );

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-sm">
        <div className="bg-transparent">
          <div className="container flex items-center justify-between py-4">
            <button
              onClick={() => {
                if (window.innerWidth < 768) setOpen(true);
                else navigate("/");
              }}
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.35)] transition hover:bg-white/15"
              aria-label="Open menu"
            >
              <img
                src={StarLogo}
                alt="Star Union"
                className="object-cover w-full h-full"
              />
            </button>

            <div className="hidden md:flex items-center gap-6 px-6 py-3 rounded-lg bg-primary ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to={`/${PATHS.PUBLIC.ABOUT}`} className={navLinkClass}>
                About Us
              </NavLink>
              <NavLink
                to={`/${PATHS.PUBLIC.COMMITTEES}`}
                className={navLinkClass}
              >
                Committees
              </NavLink>
              <NavLink
                to={`/${PATHS.PUBLIC.BOARD_HIGH}`}
                className={navLinkClass}
              >
                High-Board
              </NavLink>
              <NavLink
                to={`/${PATHS.PUBLIC.SERVICES}`}
                className={navLinkClass}
              >
                Services
              </NavLink>
              <NavLink to={`/${PATHS.PUBLIC.CONTACT}`} className={navLinkClass}>
                Contact us
              </NavLink>
            </div>

            <div className="flex items-center">
              {!isAuth ? (
                <button
                  onClick={handleLogin}
                  className="px-6 py-2 rounded-full bg-primary text-white font-medium ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-[#6A49D6]/80 transition"
                >
                  Log In
                </button>
              ) : (
                <button
                  onClick={handleProfile}
                  className="px-6 py-2 rounded-full bg-primary text-white font-medium ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-[#6A49D6]/80 transition"
                >
                  Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div
        className={[
          "fixed inset-0 z-50 bg-black/50 md:hidden transition-opacity",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={close}
        aria-hidden="true"
      />

      <aside
        className={[
          "fixed top-0 right-0 z-[60] h-dvh w-[82%] max-w-[320px] md:hidden",
          "bg-[linear-gradient(180deg,#1B1733_0%,#6A49D6_100%)]",
          "shadow-[0_30px_80px_rgba(0,0,0,0.6)]",
          "transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
      >
        <span className="absolute left-0 top-[120px] h-8 w-[3px] rounded-r bg-white/70" />

        <div className="px-5 pt-6">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 overflow-hidden rounded-full bg-white/20 ring-1 ring-white/20">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="object-cover w-full h-full"
                />
              ) : (
                <img
                  src={StarLogo}
                  alt="avatar"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
          <div className="min-w-0 pt-1 my-4">
            <p className="truncate text-[15px] font-semibold text-yellow-300">
              {isAuth ? user?.name || "Your Name" : "Guest"}
            </p>
            <p className="truncate text-[13px] text-white/80">
              {isAuth
                ? user?.email || "youremail@example.com"
                : "Login to continue"}
            </p>
          </div>

          <div className="mt-6" />

          <nav className="space-y-2">
            {mobileItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={mobileLinkClass}
                onClick={close}
              >
                <span className="text-white/90">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-6">
            {!isAuth ? (
              <button
                onClick={() => {
                  close();
                  handleLogin();
                }}
                className="w-full px-4 py-3 text-sm font-medium text-white transition rounded-xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15"
              >
                Log In
              </button>
            ) : (
              <button
                onClick={() => {
                  close();
                  handleProfile();
                }}
                className="w-full px-4 py-3 text-sm font-medium text-white transition rounded-xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15"
              >
                Profile
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

import { NavLink, useNavigate } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import StarLogo from "../../assets/icons/StarLogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const isAuth = Boolean(localStorage.getItem("token"));

  const handleLogin = () => navigate(`${PATHS.AUTH}/${PATHS.AUTH_PAGES.LOGIN}`);
  const handleProfile = () => navigate(PATHS.PROFILE);

  const navLinkClass = ({ isActive }) =>
    [
      "text-sm font-medium transition-colors duration-200",
      isActive ? "text-yellow-300" : "text-white/90 hover:text-white",
    ].join(" ");

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="bg-transparent">
        <div className="container flex items-center justify-between py-4 ">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:bg-white/15 transition"
            aria-label="Home"
          >
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:bg-white/15 transition overflow-hidden"
              aria-label="Home"
            >
              <img
                src={StarLogo}
                alt="Star Union"
                className="object-cover w-full h-full"
              />
            </button>
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
            <NavLink to={`/${PATHS.PUBLIC.SERVICES}`} className={navLinkClass}>
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
  );
}

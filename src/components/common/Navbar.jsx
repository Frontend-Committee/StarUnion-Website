import { NavLink, useNavigate } from "react-router-dom";
import { PATHS } from "../../routes/paths";

export default function Navbar() {
  const navigate = useNavigate();

  const isAuth = Boolean(localStorage.getItem("token"));

  const handleLogin = () => {
    navigate(`${PATHS.AUTH}/${PATHS.AUTH_PAGES.LOGIN}`);
  };

  const handleProfile = () => {
    navigate(PATHS.PROFILE);
  };

  return (
    <nav className="bg-white border-b">
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
        <h1
          className="text-lg font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Star Union
        </h1>

        <div className="items-center hidden gap-4 text-sm font-medium md:flex">
          <NavLink to="/" className="hover:text-gray-600">
            Home
          </NavLink>

          <NavLink
            to={`/${PATHS.PUBLIC.EVENTS}`}
            className="hover:text-gray-600"
          >
            Events
          </NavLink>

          <NavLink
            to={`/${PATHS.PUBLIC.WORKSHOPS}`}
            className="hover:text-gray-600"
          >
            Workshops
          </NavLink>

          <NavLink
            to={`/${PATHS.PUBLIC.PROJECTS}`}
            className="hover:text-gray-600"
          >
            Projects
          </NavLink>

          <NavLink
            to={`/${PATHS.PUBLIC.COMMITTEES}`}
            className="hover:text-gray-600"
          >
            Committees
          </NavLink>

          <NavLink
            to={`/${PATHS.PUBLIC.SERVICES}`}
            className="hover:text-gray-600"
          >
            Services
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          {!isAuth ? (
            <button
              onClick={handleLogin}
              className="px-4 py-1 text-sm border rounded-md hover:bg-gray-100"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleProfile}
              className="px-4 py-1 text-sm text-white bg-black rounded-md"
            >
              Profile
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

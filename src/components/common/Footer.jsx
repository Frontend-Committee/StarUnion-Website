import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";
import linkedin from "../../assets/icons/linkedin.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B12]">
      <div className="container px-4 py-10 mx-auto sm:px-6 lg:px-24 xl:px-36">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">
              <span className="bg-[linear-gradient(90deg,#7441FF_0%,#11EDA4_55%,#EFD830_100%)] bg-clip-text text-transparent">
                Star Union.com
              </span>
            </h2>

            <p className="max-w-xs text-sm leading-6 text-[#B9A6FF]/80">
              Non-Profitbale organization,
              <br />
              help you reach your dreams.
            </p>

            <NavLink
              to={`/${PATHS.PUBLIC.ABOUT}`}
              className="inline-flex text-sm font-medium text-[#B9A6FF] hover:text-[#E1D6FF] transition"
            >
              read more →
            </NavLink>

            <p className="pt-2 text-[10px] text-white/35">
              © 2026 Star Union - All Rights Reserved
            </p>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">
              <span className="bg-[linear-gradient(90deg,#E1D6FF_0%,#7441FF_100%)] bg-clip-text text-transparent">
                Company
              </span>
            </h3>

            <ul className="space-y-2 text-sm text-[#B9A6FF]/80">
              <li>
                <NavLink
                  className="hover:text-[#E1D6FF] transition"
                  to={`/${PATHS.PUBLIC.ABOUT}`}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-[#E1D6FF] transition"
                  to={`/${PATHS.PUBLIC.CONTACT}`}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-[#E1D6FF] transition"
                  to={`/${PATHS.PUBLIC.SERVICES}`}
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>

          {/* More Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">
              <span className="bg-[linear-gradient(90deg,#E1D6FF_0%,#7441FF_100%)] bg-clip-text text-transparent">
                More Info
              </span>
            </h3>

            <ul className="space-y-2 text-sm text-[#B9A6FF]/80">
              <li>
                <NavLink
                  className="hover:text-[#E1D6FF] transition"
                  to={`/${PATHS.PUBLIC.EVENTS}`}
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-[#E1D6FF] transition"
                  to={`/${PATHS.PUBLIC.WORKSHOPS}`}
                >
                  Workshops
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-[#E1D6FF] transition"
                  to={`/${PATHS.PUBLIC.PROJECTS}`}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-[#E1D6FF] transition"
                  to={`/${PATHS.PUBLIC.COMMITTEES}`}
                >
                  Committees
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-[#E1D6FF] transition"
                  to={`/${PATHS.PUBLIC.BOARD_HIGH}`}
                >
                  High-Board
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3 md:justify-self-end md:text-right">
            <h3 className="text-sm font-semibold">
              <span className="bg-[linear-gradient(90deg,#E1D6FF_0%,#7441FF_100%)] bg-clip-text text-transparent">
                Social Media
              </span>
            </h3>

            <div className="flex items-center gap-2 md:justify-end">
              <a
                href="https://www.facebook.com/profile.php?id=61551413932501"
                aria-label="Facebook"
                className="grid overflow-hidden transition rounded place-items-center w-7 h-7 hover:brightness-110"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="object-cover w-full h-full"
                />
              </a>

              <a
                href="https://www.instagram.com/star_unionn/"
                aria-label="Instagram"
                className="grid overflow-hidden transition rounded place-items-center w-7 h-7 hover:brightness-110"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={insta}
                  alt="Instagram"
                  className="object-cover w-full h-full"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/star-union2024/posts/?feedView=all"
                aria-label="LinkedIn"
                className="grid overflow-hidden transition rounded place-items-center w-7 h-7 hover:brightness-110"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="object-cover w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

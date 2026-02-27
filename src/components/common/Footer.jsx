import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PATHS } from "../../routes/paths";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";
import linkedin from "../../assets/icons/linkedin.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B12]">
      <div className="container py-10 px-36">
        <div className="grid md:grid-cols-4">
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

            <button className="text-sm font-medium text-[#B9A6FF] hover:text-[#E1D6FF] transition">
              <NavLink
                to={`/${PATHS.PUBLIC.ABOUT}`}
                className="hover:text-[#E1D6FF] transition"
              >
                read more →
              </NavLink>
            </button>

            <p className="pt-2 text-[10px] text-white/35">
              © 2026 Star Union - All Rights Reserved
            </p>
          </div>

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

          <div className="space-y-3 md:justify-self-end">
            <h3 className="text-sm font-semibold">
              <span className="bg-[linear-gradient(90deg,#E1D6FF_0%,#7441FF_100%)] bg-clip-text text-transparent">
                Social Media
              </span>
            </h3>

            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61551413932501"
                aria-label="Facebook"
                className="grid place-items-center w-7 h-7 rounded  ring-1 ring-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.35)] hover:brightness-110 transition overflow-hidden"
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
                className="grid place-items-center w-7 h-7 rounded  ring-1 ring-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.35)] hover:brightness-110 transition overflow-hidden"
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
                className="grid place-items-center w-7 h-7 rounded ring-1 ring-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.35)] hover:brightness-110 transition overflow-hidden"
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

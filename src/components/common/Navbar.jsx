import { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import StarLogo from "../../assets/icons/StarLogo.png";
import { MdOutlineMenu } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import home from "../../assets/icons/home.png";
import about from "../../assets/icons/about.png";
import committees from "../../assets/icons/committees.png";
import high from "../../assets/icons/high.png";
import services from "../../assets/icons/services.png";
import contact from "../../assets/icons/contact.png";
import projects from "../../assets/icons/projects.png";
import { logoutUser } from "@/lib/api/authApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "../ui/LoadingSpinneer";

const MotionNavLink = motion(NavLink);

export default function Navbar() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSettled: () => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("token");
      queryClient.clear();
      navigate("/");
    },
  });

  const handleLogout = () => {
    const refreshToken = localStorage.getItem("refresh");
    logoutMutation.mutate({ refresh: refreshToken });
  };

  const navLinkClass = ({ isActive }) =>
    [
      "relative text-sm font-medium transition-colors duration-300 py-2",
      "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full",
      isActive
        ? "text-yellow-300 after:w-full"
        : "text-white/80 hover:text-white",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "group flex items-center gap-4 px-4 py-3.5 text-[15px] font-medium leading-none transition-all duration-300 rounded-xl",
      isActive
        ? "bg-white/10 text-yellow-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
        : "text-white/80 hover:bg-white/5 hover:text-white",
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
            className="w-4 h-4 transition-transform brightness-0 invert opacity-90 group-hover:scale-110"
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
            className="w-4 h-4 transition-transform brightness-0 invert opacity-90 group-hover:scale-110"
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
            className="w-4 h-4 transition-transform brightness-0 invert opacity-90 group-hover:scale-110"
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
            className="w-4 h-4 transition-transform brightness-0 invert opacity-90 group-hover:scale-110"
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
            className="w-4 h-4 transition-transform brightness-0 invert opacity-90 group-hover:scale-110"
          />
        ),
      },
      {
        to: `/${PATHS.PUBLIC.PROJECTS}`,
        label: "Portfolio",
        icon: (
          <img
            src={projects}
            alt=""
            className="w-4 h-4 transition-transform brightness-0 invert opacity-90 group-hover:scale-110"
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
            className="w-4 h-4 transition-transform brightness-0 invert opacity-90 group-hover:scale-110"
          />
        ),
      },
    ],
    [],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 30 },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-sm"
      >
        <div className="container flex items-center justify-between py-5 mt-4 md:mt-6">
          <motion.button
            initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.4,
              delay: 2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileTap={{
              scale: 0.96,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            onClick={() => navigate("/")}
            className="flex items-center justify-center w-12 h-12 overflow-hidden rounded-full shadow-lg bg-white/5 ring-1 ring-white/20"
            aria-label="Go home"
          >
            <img
              src={StarLogo}
              alt="Star Union"
              className="object-cover w-full h-full"
            />
          </motion.button>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center md:gap-4 lg:gap-7 px-5 py-1.5 rounded-xl bg-primary backdrop-blur-xl ring-1  ring-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            <MotionNavLink
              variants={itemVariants}
              to="/"
              className={navLinkClass}
            >
              Home
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={`/${PATHS.PUBLIC.ABOUT}`}
              className={navLinkClass}
            >
              About Us
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={`/${PATHS.PUBLIC.COMMITTEES}`}
              className={navLinkClass}
            >
              Committees
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={`/${PATHS.PUBLIC.BOARD_HIGH}`}
              className={navLinkClass}
            >
              High-Board
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={`/${PATHS.PUBLIC.SERVICES}`}
              className={navLinkClass}
            >
              Services
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={`/${PATHS.PUBLIC.CONTACT}`}
              className={navLinkClass}
            >
              Contact us
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={`/${PATHS.PUBLIC.PROJECTS}`}
              className={navLinkClass}
            >
              Portfolio
            </MotionNavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4"
          >
            {!isAuth ? (
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  boxShadow: "0px 10px 25px rgba(116,65,255,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={handleLogin}
                className="hidden md:block px-5 py-2.5 rounded-xl bg-primary text-sm font-semibold text-white transition-all border border-white/10"
              >
                Log In
              </motion.button>
            ) : (
              <div className="flex gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    boxShadow: "0px 10px 25px rgba(116,65,255,0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleProfile}
                  className="hidden md:block px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-white transition-all border border-white/10"
                >
                  Profile
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    boxShadow: "0px 10px 25px rgba(239,68,68,0.3)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleLogout}
                  disabled={logoutMutation.isPending}
                  className="hidden md:block px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/10 text-white hover:bg-error transition-all border border-white/10"
                >
                  Logout
                </motion.button>
              </div>
            )}

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(true)}
              className="flex items-center justify-center p-2 text-white transition-colors rounded-lg md:hidden hover:bg-white/10"
              aria-label="Open menu"
            >
              <MdOutlineMenu size={28} />
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      <div
        className="w-full h-[104px] md:h-[90px] shrink-0 pointer-events-none"
        aria-hidden="true"
      />
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 z-50 bg-[#0d0d1a]/80 backdrop-blur-md md:hidden"
              onClick={close}
              aria-hidden="true"
            />

            <motion.aside
              initial={{
                x: "100%",
                borderTopLeftRadius: "100px",
                borderBottomLeftRadius: "100px",
              }}
              animate={{
                x: 0,
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
              exit={{
                x: "100%",
                borderTopLeftRadius: "100px",
                borderBottomLeftRadius: "100px",
              }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 250,
                mass: 0.8,
              }}
              className="fixed top-0 right-0 z-[60] h-dvh w-[85%] max-w-[340px] md:hidden bg-[linear-gradient(180deg,rgba(30,26,43,0.98)_0%,rgba(77,51,152,0.95)_100%)] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl border-l border-white/10"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex flex-col h-full px-6 pt-10 pb-8 overflow-y-auto hide-scrollbar">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="flex items-center gap-4 pb-6 border-b border-white/10"
                >
                  <div className="overflow-hidden rounded-full shadow-lg w-14 h-14 bg-white/10 ring-2 ring-primary/50">
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
                        className="object-cover w-full h-full p-2"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-bold text-white truncate">
                      {isAuth ? user?.name || "Your Name" : "Guest"}
                    </p>
                    <p className="truncate text-[13px] font-medium text-yellow-300">
                      {isAuth
                        ? user?.email || "youremail@example.com"
                        : "Welcome aboard"}
                    </p>
                  </div>
                </motion.div>

                <nav className="flex flex-col flex-1 gap-1 py-6">
                  {mobileItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.3 + i * 0.06,
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      <NavLink
                        to={item.to}
                        className={mobileLinkClass}
                        onClick={close}
                      >
                        <span className="flex items-center justify-center w-8 h-8 transition-colors rounded-lg bg-white/5 group-hover:bg-white/10">
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="pt-6 border-t border-white/10"
                >
                  {!isAuth ? (
                    <button
                      onClick={() => {
                        close();
                        handleLogin();
                      }}
                      className="w-full px-4 py-3.5 text-sm font-bold text-white transition-all rounded-xl hover:bg-[#683ce3] bg-primary shadow-[0_8px_20px_rgba(116,65,255,0.3)] active:scale-95"
                    >
                      Log In
                    </button>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          close();
                          handleProfile();
                        }}
                        className="flex-1 px-4 py-3 text-sm font-bold text-white transition-all rounded-xl hover:bg-[#683ce3] bg-primary shadow-[0_8px_20px_rgba(116,65,255,0.3)] active:scale-95"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          close();
                          handleLogout();
                        }}
                        disabled={logoutMutation.isPending}
                        className="flex-1 px-4 py-3 text-sm font-bold text-white transition-all rounded-xl bg-white/10 hover:bg-error active:scale-95"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {logoutMutation.isPending && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#130c24]/80"
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

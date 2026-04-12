/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutHero from "../../../assets/images/AboutHero.png";
import CommunityImage from "../../../assets/images/Community.jpg";
import EventsImage from "../../../assets/images/Events.jpg";
import MissonImage from "../../../assets/images/Misson.jpg";
import StartupImage from "../../../assets/images/StartupBusiness.jpg";
import WorkshopsImage from "../../../assets/images/Workshops.jpg";
import ArrowRight from "../../../assets/icons/ArrowRight.svg";
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import { PATHS } from "../../../routes/paths";
import Footer from "../../../components/common/Footer";
import HorizontalScrollSection from "../../../components/common/HorizontalScrollSection";
import { link } from "framer-motion/client";
import { Link } from "react-router-dom";

// ─── Inline SVGs ──────────────────────────────────────────────────────────────
function IconChevronDown({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <img
      src={ArrowRight}
      className="w-8 h-8 transition-transform duration-200 hover:scale-125"
      alt="Arrow Right"
    />
  );
}

function StarLogo() {
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_22px_rgba(255,255,255,0.55)]"
    >
      <path
        d="M60 4 L67 53 L116 60 L67 67 L60 116 L53 67 L4 60 L53 53 Z"
        fill="white"
      />
    </svg>
  );
}

// ─── Committee Dropdown ───────────────────────────────────────────────────────
function CommitteeDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex-1">
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-between w-full px-6 py-4 bg-white text-[#311f62] rounded-lg shadow-xl cursor-pointer hover:bg-white/95 transition-all"
      >
        <span className="text-base font-bold md:text-lg">{label}</span>
        <div
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <IconChevronDown open={open} />
        </div>
      </motion.button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full mt-2 bg-[#1E1A2B]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
        >
          {items.map((item, i) => (
            <button
              key={item}
              className="w-full px-6 py-4 font-medium text-left text-white transition-colors border-b hover:bg-white/10 border-white/5 last:border-0 whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// ─── Activity Card ────────────────────────────────────────────────────────────
function ActivityCard({ image, title, delay = 0, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-square group cursor-pointer shadow-2xl"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 transition-colors duration-300 bg-black/40 group-hover:bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <h3 className="mb-4 text-2xl font-bold text-center text-white transition-transform duration-300 md:text-3xl group-hover:scale-105">
          {title}
        </h3>

        <div className="absolute left-0 right-0 flex justify-center transition-all duration-300 translate-y-4 opacity-0 bottom-8 group-hover:opacity-100 group-hover:translate-y-0">
          <Link to={link}>
            <button className="px-4 py-1.5 text-[14px] font-bold text-[#452798] bg-white rounded-md shadow-lg hover:bg-[#452798] hover:text-white transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
//  ABOUT US PAGE (Optimized with Animations)
// ════════════════════════════════════════════════════════════════════════════════
export default function AboutUsPage() {
  const navigate = useNavigate();

  // -- Animation config for Scroll/Parallax --
  const { scrollY } = useScroll();
  // Hero image moves slightly slower than page scroll for depth
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  const technicalCommittees = [
    "Frontend Committee",
    "Backend Committee",
    "AI & Data Committee",
    "Cybersecurity Committee",
    "Mobile Development",
  ];
  const nonTechnicalCommittees = [
    "Media & Design Committee",
    "Marketing Committee",
    "HR Committee",
    "Finance Committee",
    "PR & Communications",
  ];
  const activities = [
    {
      image: WorkshopsImage,
      title: "Workshops",
      link: `/${PATHS.PUBLIC.WORKSHOPS}`,
    },
    { image: EventsImage, title: "Events", link: `/${PATHS.PUBLIC.EVENTS}` },
    {
      image: StartupImage,
      title: "Startup Business",
      link: `/${PATHS.PUBLIC.STARTUP}`,
    },
    {
      image: CommunityImage,
      title: "Community Building",
      link: `/${PATHS.PUBLIC.COMMUNITY}`,
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden ">
      {/* ══════ 1. HERO (With Parallax Effect) ══════ */}
      <section className="absolute top-0 left-0 w-full h-[300px] md:h-[475px] bg-[#0d0d1a] overflow-hidden flex items-center justify-center z-0">
        {/* Animated container for the hero background */}
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 right-0 z-10 w-1/2 h-full opacity-60 bg-gradient-to-l from-secondary/30 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 z-10 w-1/2 h-full opacity-60 bg-gradient-to-r from-primary/30 to-transparent blur-3xl" />
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `url(${AboutHero})`,
              backgroundSize: "cover",
              backgroundPosition: "center 37%",
              backgroundRepeat: "no-repeat",
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10 z-[5]" />
      </section>

      {/* Hero Spacer */}
      <div className="h-[250px] md:h-[400px]" />

      {/* ══════ 2. WHO WE ARE (Smooth Fade Entrance) ══════ */}
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto md:px-12">
          <ScrollAnimation variant="fade-up">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl md:text-4xl font-bold text-[#FCDD00]"
            >
              Who We Are
            </motion.h2>
            <p className="text-base md:text-lg leading-[1.7] text-white/90 max-w-4xl">
              S.T.A.R Union is a student activity founded on September 9, 2023,
              with a strong belief that every student has the potential to
              build, innovate, and grow. We focus on empowering
              students—especially in technology and computer science—by
              providing hands-on experiences, real-world exposure, and a
              supportive environment that bridges the gap between learning and
              practice.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* ══════ 3. OUR MISSION (Scale Image on View) ══════ */}
      <section className="py-12 md:py-20">
        <div className="container flex flex-col items-center gap-10 px-6 mx-auto md:px-12 md:flex-row lg:gap-20">
          <div className="flex-1">
            <ScrollAnimation variant="fade-up">
              <h2 className="mb-4 text-3xl md:text-4xl font-bold text-[#FCDD00]">
                Our Mission
              </h2>
              <p className="text-base md:text-lg leading-[1.7] text-white/90">
                To equip students with technical and non-technical skills
                through workshops, events, and practical experiences, while
                spreading awareness about startups, micro-businesses, and
                entrepreneurship.
              </p>
            </ScrollAnimation>
          </div>
          <div className="flex-1 w-full max-w-[450px]">
            <ScrollAnimation variant="zoom-in">
              {/* Added subtle scale hover to the mission card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-2 border shadow-2xl bg-white/5 rounded-2xl backdrop-blur-md border-white/10"
              >
                <img
                  src={MissonImage}
                  alt="Our Mission"
                  className="object-cover w-full rounded-xl h-[200px] md:h-[400px]"
                />
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ══════ 4. OUR COMMITTEES (Staggered Children Animation) ══════ */}
      <section className="relative w-full py-12 md:py-20">
        <div className="container px-6 mx-auto md:px-12">
          <ScrollAnimation variant="fade-up">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FCDD00]">
                Our Committees
              </h2>
              <IconChevronRight />
            </div>
          </ScrollAnimation>

          {/* Container triggers children animations one by one */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="flex flex-col gap-4 md:flex-row"
          >
            <CommitteeDropdown
              label="Technical Committees"
              items={technicalCommittees}
            />
            <CommitteeDropdown
              label="Non-Technical Committees"
              items={nonTechnicalCommittees}
            />
          </motion.div>
        </div>
      </section>

      {/* ══════ 5. WHAT WE DO (Interactive Cards) ══════ */}
      <section className="w-full py-12 pb-24 md:py-20 md:pb-32">
        <div className="container px-6 mx-auto md:px-12">
          <ScrollAnimation variant="fade-up">
            <h2 className="mb-10 text-3xl md:text-4xl font-bold text-[#FCDD00]">
              What We Do
            </h2>
          </ScrollAnimation>

          <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2">
            {activities.map((act, i) => (
              <motion.div
                key={act.title}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ActivityCard
                  image={act.image}
                  title={act.title}
                  link={act.link} // Added this line to pass the link
                  delay={i * 0.15}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

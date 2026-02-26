/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutHero from "../../../assets/images/AboutHero.jpg";
import CommunityImage from "../../../assets/images/Community.jpg";
import EventsImage from "../../../assets/images/Events.jpg";
import MissonImage from "../../../assets/images/Misson.jpg";
import StartupImage from "../../../assets/images/StartupBusiness.jpg";
import WorkshopsImage from "../../../assets/images/Workshops.jpg";
import ArrowRight from "../../../assets/icons/ArrowRight.svg";
import ScrollAnimation from "../../../components/ui/ScrollAnimation"; // adjust path

// ─── Inline SVGs ──────────────────────────────────────────────────────────────
function IconChevronDown({ open }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <img src={ArrowRight} className="w-8 h-8 hover:scale-125 transition-transform duration-200" alt="Arrow Right" />
  );
}

function StarLogo() {
  return (
    <svg width="110" height="110" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_22px_rgba(255,255,255,0.55)]">
      <path d="M60 4 L67 53 L116 60 L67 67 L60 116 L53 67 L4 60 L53 53 Z" fill="white" />
    </svg>
  );
}

// ─── Committee Dropdown ───────────────────────────────────────────────────────
function CommitteeDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 px-5 py-2.5 border w-80 justify-center border-white rounded-lg bg-white text-primary text-sm font-semibold cursor-pointer hover:bg-white/90 transition-colors duration-200"
      >
        {label}
        <IconChevronDown open={open} />
      </motion.button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-[calc(100%+8px)] left-0 min-w-[220px] bg-[rgba(36,19,82,0.97)] border border-white/18 rounded-xl shadow-lg z-50"
        >
          {items.map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
              className="block w-full text-left px-4 py-2.5 text-xs text-white hover:text-white/35 bg-transparent border-none cursor-pointer hover:bg-white/9 transition duration-150"
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// ─── Activity Card ────────────────────────────────────────────────────────────
function ActivityCard({ image, title, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative overflow-hidden rounded-[10px] aspect-square cursor-pointer group max-w-96"
    >
      <img
        src={image} alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300" />
      <div className="absolute inset-0 flex flex-col items-center justify-between py-5 px-4">
        <h3 className="text-white font-bold text-base text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {title}
        </h3>
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-1.5 text-xs font-semibold text-[#1a0a4b] bg-white border border-white rounded-full hover:bg-white/90 transition-colors duration-200 shadow-md"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
//  ABOUT US PAGE
// ════════════════════════════════════════════════════════════════════════════════
export default function AboutUsPage() {
  const technicalCommittees = [
    "Frontend Committee", "Backend Committee", "AI & Data Committee",
    "Cybersecurity Committee", "Mobile Development",
  ];
  const nonTechnicalCommittees = [
    "Media & Design Committee", "Marketing Committee",
    "HR Committee", "Finance Committee", "PR & Communications",
  ];
  const activities = [
    { image: WorkshopsImage, title: "Workshops" },
    { image: EventsImage, title: "Events" },
    { image: StartupImage, title: "Startup Business" },
    { image: CommunityImage, title: "Community Building" },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-[radial-gradient(circle_at_center,_#4D3398_0%,_#241352_40%,_#1E1A2B_100%)]">

      {/* ══════ 1. HERO ══════ */}
      <section
        className="relative w-full min-h-[340px]   flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${AboutHero})` }}
      >
      
      
      </section>

      {/* ══════ 2. WHO WE ARE ══════ */}
      <section className="py-16">
        <div className="container">
          <ScrollAnimation variant="fade-right">
            <h2 className="text-tertiary text-4xl font-semibold mb-4">Who We Are</h2>
          </ScrollAnimation>
          <ScrollAnimation variant="fade-up" delay={150}>
            <p className="text-white text-sm  leading-loose max-w-2xl  mb-3">
            S.T.A.R Union is a student activity founded on September 9, 2023, with a strong belief that every student has the potential to build, innovate, and grow. We focus on empowering students—especially in technology and computer science—by providing hands-on experiences, real-world exposure, and a supportive environment that bridges the gap between learning and practice.
            </p>
          </ScrollAnimation>
          {/* <ScrollAnimation variant="fade-up" delay={300}>
            <p className="text-white text-sm leading-loose">
              We focus on empowering students—especially in technology and
              computer science—by providing hands-on experiences, real-world
              exposure, and a supportive environment that bridges the gap between
              learning and practice.
            </p>
          </ScrollAnimation> */}
        </div>
      </section>

      {/* ══════ 3. OUR MISSION ══════ */}
      <section className="py-12 pb-16">
        <div className="container flex flex-wrap items-center gap-12">
          <div className="flex-1 min-w-[300px]">
            <ScrollAnimation variant="fade-right">
              <h2 className="text-4xl font-semibold text-tertiary mb-4">Our Mission</h2>
            </ScrollAnimation>
            <ScrollAnimation variant="fade-up" delay={200}>
              <p className="text-white text-sm leading-loose max-w-lg">
                To equip students with technical and non-technical skills through
                workshops, events, and practical experiences, while spreading
                awareness about startups, micro-businesses, and entrepreneurship.
              </p>
            </ScrollAnimation>
          </div>

          <ScrollAnimation variant="fade-left" className="flex-shrink-0">
            <motion.img
              src={MissonImage}
              alt="Our Mission"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-[400px] rounded-lg object-cover aspect-square shadow-xl"
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* ══════ 4. OUR COMMITTEES ══════ */}
      <section className="relative w-full py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <ScrollAnimation variant="fade-right">
              <h2 className="text-tertiary text-4xl font-semibold m-0">Our Committees</h2>
            </ScrollAnimation>
            <ScrollAnimation variant="zoom-in">
              <button
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/6 text-white cursor-pointer hover:bg-white/14 transition-colors duration-200"
                aria-label="Browse committees"
              >
                <IconChevronRight />
              </button>
            </ScrollAnimation>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Technical Committees", items: technicalCommittees },
              { label: "Non-Technical Committees", items: nonTechnicalCommittees },
            ].map(({ label, items }, i) => (
              <ScrollAnimation key={label} variant="fade-up" delay={i * 150}>
                <CommitteeDropdown label={label} items={items} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 5. WHAT WE DO ══════ */}
      <section className="w-full py-16">
        <div className="container">
          <ScrollAnimation variant="fade-up">
            <h2 className="text-tertiary text-4xl font-semibold mb-8">What We Do</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 max-w-[650px] mx-auto gap-3">
            {activities.map((act, i) => (
              <ActivityCard
                key={act.title}
                image={act.image}
                title={act.title}
                delay={i * 0.12}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
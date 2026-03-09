/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutHero from "../../../assets/images/AboutHero.jpg";
import CommunityImage from "../../../assets/images/Community.jpg";
import EventsImage from "../../../assets/images/Events.jpg";
import MissonImage from "../../../assets/images/Misson.jpg";
import StartupImage from "../../../assets/images/StartupBusiness.jpg";
import WorkshopsImage from "../../../assets/images/Workshops.jpg";
import ArrowRight from "../../../assets/icons/ArrowRight.svg";
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import Footer from "../../../components/common/Footer";
import HorizontalScrollSection from "../../../components/common/HorizontalScrollSection";

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
    <img src={ArrowRight} className="w-8 h-8 transition-transform duration-200 hover:scale-125" alt="Arrow Right" />
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
    <div className="relative flex-1">
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-between w-full px-6 py-4 bg-white text-[#311f62] rounded-lg shadow-xl cursor-pointer hover:bg-white/95 transition-all"
      >
        <span className="font-bold text-base md:text-lg">{label}</span>
        <div className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
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
              className="w-full text-left px-6 py-4 text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 font-medium whitespace-nowrap"
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
function ActivityCard({ image, title, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-square group cursor-pointer shadow-2xl"
    >
      <img
        src={image} alt={title}
        className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <h3 className="text-white font-bold text-2xl md:text-3xl text-center mb-4 transition-transform duration-300 group-hover:scale-105">
          {title}
        </h3>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button className="px-4 py-1.5 text-[14px] font-bold text-[#452798] bg-white rounded-md shadow-lg hover:bg-[#452798] hover:text-white transition-colors">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
//  ABOUT US PAGE
// ════════════════════════════════════════════════════════════════════════════════
export default function AboutUsPage() {
  const navigate = useNavigate();
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
    <div className="w-full overflow-x-hidden bg-[#0A051C] min-h-screen">

      {/* ══════ 1. HERO ══════ */}
      <section className="relative w-full py-20 md:py-32 bg-[#0d0d1a] overflow-hidden flex items-center justify-center">
        {/* Nebula/Glow Background Effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/20 to-transparent blur-3xl opacity-50" />
        
        {/* Background Image/Pattern Overlay if needed */}
        <div 
          className="absolute inset-0 pointer-events-none "
          style={{ backgroundImage: `url(${AboutHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />


      </section>

      {/* ══════ 2. WHO WE ARE ══════ */}
      <section className="py-20 md:py-32 bg-[#2a1b5c]">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollAnimation variant="fade-up">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-[#FCDD00]">Who We Are</h2>
            <p className="text-base md:text-xl leading-[1.8] text-white/90 max-w-4xl">
              S.T.A.R Union is a student activity founded on September 9, 2023, with a strong belief that every student has the potential to build, innovate, and grow. We focus on empowering students—especially in technology and computer science—by providing hands-on experiences, real-world exposure, and a supportive environment that bridges the gap between learning and practice.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* ══════ 3. OUR MISSION ══════ */}
      <section className="py-20 md:py-32 bg-[#2a1b5c]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <ScrollAnimation variant="fade-up">
              <h2 className="mb-6 m-0 text-3xl md:text-4xl font-bold text-[#FCDD00]">Our Mission</h2>
              <p className="text-base md:text-xl leading-[1.8] text-white/90">
                To equip students with technical and non-technical skills through
                workshops, events, and practical experiences, while spreading
                awareness about startups, micro-businesses, and entrepreneurship.
              </p>
            </ScrollAnimation>
          </div>

          <div className="flex-1 w-full max-w-[500px]">
            <ScrollAnimation variant="zoom-in">
              <div className="relative p-2 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-md">
                <img
                  src={MissonImage}
                  alt="Our Mission"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ══════ 4. OUR COMMITTEES ══════ */}
      <section className="relative w-full py-20 bg-[#2a1b5c]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-12">
            <ScrollAnimation variant="fade-up" className="flex items-center gap-6">
              <h2 className="m-0 text-3xl md:text-4xl font-bold text-[#FCDD00]">Our Committees</h2>
              <IconChevronRight />
            </ScrollAnimation>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <CommitteeDropdown label="Technical Committees" items={technicalCommittees} />
            <CommitteeDropdown label="Non-Technical Committees" items={nonTechnicalCommittees} />
          </div>
        </div>
      </section>

      {/* ══════ 5. WHAT WE DO ══════ */}
      <section className="w-full py-20 pb-32 bg-[#2a1b5c]">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollAnimation variant="fade-up">
            <h2 className="mb-12 text-3xl md:text-4xl font-bold text-[#FCDD00]">What We Do</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activities.map((act, i) => (
              <ActivityCard
                key={act.title}
                image={act.image}
                title={act.title}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
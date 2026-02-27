import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

// ─── Placeholder images (Unsplash – swap with real assets later) ─────────────
const IMG_MISSION =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"; // mountain / mission
const IMG_WORKSHOPS =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"; // sticky notes on table
const IMG_EVENTS =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"; // conference hall
const IMG_STARTUP =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"; // startup laptops
const IMG_COMMUNITY =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"; // community people

// ─── Star SVG (inline, so no extra import needed) ────────────────────────────
function StarLogo() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_24px_rgba(255,255,255,0.6)]"
    >
      {/* 4-pointed star */}
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
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-5 py-2.5 border border-white/60 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200"
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-bg31/95 border border-white/20 rounded-xl shadow-xl z-50 overflow-hidden animate-fadeIn">
          {items.map((item) => (
            <button
              key={item}
              className="block w-full text-left px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 transition-colors duration-150"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Activity Card ────────────────────────────────────────────────────────────
function ActivityCard({ image, title }) {
  return (
    <div className="relative overflow-hidden rounded-xl group cursor-pointer aspect-square">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-between p-4">
        {/* Title */}
        <h3 className="mt-3 text-white font-bold text-xl text-center drop-shadow-lg">
          {title}
        </h3>

        {/* View Details button */}
        <button className="px-5 py-1.5 mb-2 text-xs font-semibold text-white bg-white/20 border border-white/40 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AboutUsPage() {
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
    { image: IMG_WORKSHOPS, title: "Workshops" },
    { image: IMG_EVENTS, title: "Events" },
    { image: IMG_STARTUP, title: "Startup Business" },
    { image: IMG_COMMUNITY, title: "Community Building" },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* ══════════════════════════════════════════════════════════════════════
          HERO — Background 3 gradient
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-[340px] flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at top, #241352 0%, #4D3398 45%, #1E1A2B 100%)",
        }}
      >
        {/* Green glow orb — top right */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(17,237,164,0.45) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
            filter: "blur(40px)",
          }}
        />

        {/* Purple glow orb — bottom left */}
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(116,65,255,0.4) 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
            filter: "blur(36px)",
          }}
        />

        {/* Star + title */}
        <div className="relative z-10 flex flex-col items-center gap-4 py-16 px-6 text-center">
          <StarLogo />
          <h1
            className="text-2xl md:text-4xl font-extrabold tracking-[0.18em] uppercase text-white"
            style={{ letterSpacing: "0.18em" }}
          >
            Reach The Stars
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHO WE ARE — white background
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-tertiary mb-4">
            Who We Are
          </h2>
          <p className="text-text text-sm md:text-base leading-relaxed">
            S.T.A.R Union is a student activity founded on September 8, 2023,
            with a strong belief that every student has the potential to build,
            innovate, and grow.
          </p>
          <p className="text-text text-sm md:text-base leading-relaxed mt-3">
            We focus on empowering students—especially in technology and
            computer science—by providing hands-on experiences, real-world
            exposure, and a supportive environment that bridges the gap between
            learning and practice.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OUR MISSION — white with image on right
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 md:py-16 border-t border-gray-100">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Text */}
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-tertiary mb-4">
                Our Mission
              </h2>
              <p className="text-text text-sm md:text-base leading-relaxed">
                To equip students with technical and non-technical skills
                through workshops, events, and practical experiences, while
                spreading awareness about startups, micro-businesses, and
                entrepreneurship.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 flex-shrink-0">
              <img
                src={IMG_MISSION}
                alt="Our Mission"
                className="w-full max-w-[300px] md:max-w-[340px] rounded-2xl object-cover shadow-soft"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OUR COMMITTEES — Background 3 gradient
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full py-12 md:py-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at top, #241352 0%, #4D3398 45%, #1E1A2B 100%)",
        }}
      >
        <div className="container max-w-5xl">
          {/* Header row */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Our Committees
            </h2>
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Browse committees"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dropdown buttons */}
          <div className="flex flex-wrap gap-3">
            <CommitteeDropdown
              label="Technical Committees"
              items={technicalCommittees}
            />
            <CommitteeDropdown
              label="Non-Technical Committees"
              items={nonTechnicalCommittees}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHAT WE DO — dark purple + 2×2 activity grid
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="w-full py-12 md:py-16"
        style={{ background: "#1E1A2B" }}
      >
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">
            What We Do
          </h2>

          {/* 2×2 grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {activities.map((act) => (
              <ActivityCard
                key={act.title}
                image={act.image}
                title={act.title}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

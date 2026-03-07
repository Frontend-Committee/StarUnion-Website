import { AnimatePresence, motion as Motion } from "framer-motion";
import { useState } from "react";
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import {
  HIGH_BOARD_FEATURED,
  HIGH_BOARD_SECTIONS,
} from "../../../utils/constants";
import facebookIcon from "../../../assets/icons/facebookIcon.png";
import HorizontalScrollSection from "../../../components/common/HorizontalScrollSection";

/* ─────────────────────────────────────────────────────────────────────────────
   Shared social icons helper
───────────────────────────────────────────────────────────────────────────── */
const Socials = ({ socials }) => (
  <div className="flex gap-[5px]">
    {socials?.facebook && (
      <img src={facebookIcon} alt="" className="w-6 h-6 object-cover" />
    )}
  </div>
);

const TeamCard = ({ member, delay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={delay} className="flex-shrink-0">
    <Motion.div
      className="w-[220px] h-[380px] rounded-[14px] overflow-hidden border border-gray-200 bg-white flex flex-col primary-card-hover"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
    >
      <div className="relative w-full bg-[#111827] overflow-hidden" style={{ height: 230 }}>
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="w-full h-full flex flex-col justify-end p-3" style={{ background: "linear-gradient(170deg,#122112 0%,#0a1f0a 35%,#1a1030 100%)" }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-[#11EDA4]/40" />
            <p className="text-white font-extrabold text-[10px] leading-tight mb-0.5">Developer Student Community</p>
            <p className="text-white/50 text-[8px] leading-tight">Learn | Build | Grow</p>
          </div>
        )}
      </div>
      <div className="bg-white px-4 pt-4 pb-5 flex flex-col">
        <h4 className="text-primary font-bold text-[16px] leading-tight">{member.name}</h4>
        <p className="text-[#111] text-[14px] font-bold mt-[4px]">{member.role}</p>
        <p className="text-gray-500 text-[13px] leading-snug mt-[4px] truncate-2-lines">{member.description}</p>
        <div className="mt-3">
          <Socials socials={member.socials} />
        </div>
      </div>
    </Motion.div>
  </ScrollAnimation>
);

const FeaturedLeaderCard = ({ member, delay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={delay}>
    <Motion.div
      whileHover={{ y: -3, boxShadow: "0 20px 50px rgba(116,65,255,0.18)" }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="w-full rounded-[16px] overflow-hidden bg-white flex flex-col md:flex-row primary-card-hover"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)", minHeight: 210 }}
    >
      <div className="w-full md:w-[240px] h-[280px] md:h-auto flex-shrink-0 relative overflow-hidden md:order-2">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="w-full h-full" style={{ background: "linear-gradient(135deg,#241352 0%,#4D3398 60%,#1E1A2B 100%)" }} />
        )}
        <div className="hidden md:block absolute inset-y-0 left-0 w-14 pointer-events-none" style={{ background: "linear-gradient(to right,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)" }} />
        <div className="md:hidden absolute inset-x-0 bottom-0 h-14 pointer-events-none" style={{ background: "linear-gradient(to top,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)" }} />
      </div>
      <div className="flex-1 px-6 py-6 md:px-8 md:py-8 flex flex-col justify-center min-w-0 md:order-1 text-center md:text-left">
        <h3 className="text-primary font-bold text-[20px] md:text-[24px] leading-tight">{member.name}</h3>
        <p className="text-[#111] font-bold text-[15px] md:text-[17px] mt-1">{member.role}</p>
        <p className="text-gray-500 text-[13px] md:text-[15px] leading-relaxed mt-2 md:mt-3 max-w-sm mx-auto md:mx-0 truncate-4-lines">
          {member.description}
        </p>
        <div className="mt-4 md:mt-5 flex justify-center md:justify-start">
          <Socials socials={member.socials} />
        </div>
      </div>
    </Motion.div>
  </ScrollAnimation>
);

/* ─────────────────────────────────────────────────────────────────────────────
   BoardSection — yellow heading + horizontal scrollable TeamCard list
───────────────────────────────────────────────────────────────────────────── */
const BoardSection = ({ label, members, sectionDelay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={sectionDelay}>
    <div className="mb-12">
      <h2 className="text-tertiary font-bold text-3xl md:text-4xl mb-6 px-4 md:px-0">{label}</h2>
      <HorizontalScrollSection className="px-4 md:px-0">
        {members.map((member, i) => (
          <TeamCard key={member.id} member={member} delay={i * 70} />
        ))}
      </HorizontalScrollSection>
    </div>
  </ScrollAnimation>
);

/* ─────────────────────────────────────────────────────────────────────────────
   Year tabs available
───────────────────────────────────────────────────────────────────────────── */
const YEARS = [2026, 2025, 2024];

/* ─────────────────────────────────────────────────────────────────────────────
   HighBoardPage — main export
───────────────────────────────────────────────────────────────────────────── */
export default function HighBoardPage() {
  const [activeYear, setActiveYear] = useState(2026);

  return (
    <section className="container py-6 md:py-10 px-4 md:px-8">
      {/* ── Year navigation bar ── */}
      <ScrollAnimation variant="fade-down">
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10 w-full md:w-fit mx-auto">
          {/* Year pills */}
          {YEARS.map((year) => {
            const isActive = year === activeYear;
            return (
              <Motion.button
                key={year}
                id={`year-${year}`}
                onClick={() => setActiveYear(year)}
                whileTap={{ scale: 0.95 }}
                className={`relative px-8 py-[10px] rounded-full text-[18px] font-bold transition duration-300 overflow-hidden ${
                  isActive
                    ? "bg-primary text-white border border-white"
                    : "border border-primary  text-white hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <Motion.span
                    layoutId="year-pill-bg"
                    className="absolute inset-0 rounded-full bg-primary"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {year}
              </Motion.button>
            );
          })}
        </div>
      </ScrollAnimation>

      {/* ── Year content (fade-swap on year change) ── */}
      <AnimatePresence mode="wait">
        <Motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28 }}
        >
          {/* Featured: President + General Manager */}
          <div className="flex flex-col gap-5 mb-14">
            {HIGH_BOARD_FEATURED.map((leader, i) => (
              <FeaturedLeaderCard
                key={leader.id + "-" + activeYear}
                member={leader}
                delay={i * 100}
              />
            ))}
          </div>

          {/* Role sections */}
          {HIGH_BOARD_SECTIONS.map((section, i) => (
            <BoardSection
              key={section.label + "-" + activeYear}
              label={section.label}
              members={section.members}
              sectionDelay={i * 80}
            />
          ))}
        </Motion.div>
      </AnimatePresence>
    </section>
  );
}

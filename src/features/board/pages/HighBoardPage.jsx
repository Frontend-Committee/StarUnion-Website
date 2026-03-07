import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import {
  HIGH_BOARD_FEATURED,
  HIGH_BOARD_SECTIONS,
} from "../../../utils/constants";
import facebookIcon from "../../../assets/icons/facebookIcon.png";
/* ─────────────────────────────────────────────────────────────────────────────
   Shared social icons helper
───────────────────────────────────────────────────────────────────────────── */
const SocialBtn = ({ color, href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="flex items-center justify-center text-white hover:opacity-80 transition-opacity rounded-[4px]"
    style={{ width: 26, height: 26, backgroundColor: color, flexShrink: 0 }}
  >
    {children}
  </a>
);

const FB_PATH =
  "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z";
const LI_PATH =
  "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z";
const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const Socials = ({ socials, size = 26 }) => (
  <div className="flex gap-[5px]">
      {socials?.facebook && (
                <img src={facebookIcon} alt="" srcset="" className="w-6 h-6 object-cover" />
              )}  {socials?.facebook && (
                <img src={facebookIcon} alt="" srcset="" className="w-6 h-6 object-cover" />
              )}  {socials?.facebook && (
                <img src={facebookIcon} alt="" srcset="" className="w-6 h-6 object-cover" />
              )}
    {/* {socials?.linkedin && (
      <SocialBtn color="#0A66C2" href={socials.linkedin} label="LinkedIn">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: size - 12, height: size - 12 }}
        >
          <path d={LI_PATH} />
        </svg>
      </SocialBtn>
    )} */}
    {/* {socials?.instagram && (
      <SocialBtn color="#25D366" href={socials.instagram} label="WhatsApp">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: size - 12, height: size - 12 }}
        >
          <path d={WA_PATH} />
        </svg>
      </SocialBtn>
    )} */}
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────────
   TeamCard — white card, full-bleed photo, purple name, coloured social icons
   (identical design to CommitteeDetailsPage TeamCard)
───────────────────────────────────────────────────────────────────────────── */
const TeamCard = ({ member, delay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={delay} className="flex-shrink-0">
    <motion.div
      // whileHover={{  boxShadow: "0 16px 40px rgba(116,65,255,0.22)" }}
      // transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="w-[170px] h-80 rounded-[14px] overflow-hidden border border-gray-200 bg-white flex flex-col primary-card-hover"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
    >
      {/* Photo */}
      <div
        className="relative w-full bg-[#111827] overflow-hidden"
        style={{ height: 180 }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col justify-end p-3"
            style={{
              background:
                "linear-gradient(170deg,#122112 0%,#0a1f0a 35%,#1a1030 100%)",
            }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#11EDA4]/40" />
            <p className="text-white font-extrabold text-[10px] leading-tight mb-0.5">
              Developer Student Community
            </p>
            <p className="text-white/50 text-[8px] leading-tight">
              Learn | Build | Grow
            </p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="bg-white px-3 pt-3 pb-4 flex flex-col">
        <h4 className="text-primary font-bold text-[13px] leading-tight">
          {member.name}
        </h4>
        <p className="text-[#111] text-[12px] font-bold mt-[2px]">
          {member.role}
        </p>
        <p className="text-gray-500 text-[11px] leading-snug mt-[2px]">
          {member.description}
        </p>
        <div className="mt-3">
          <Socials socials={member.socials} size={26} />
        </div>
      </div>
    </motion.div>
  </ScrollAnimation>
);

/* ─────────────────────────────────────────────────────────────────────────────
   FeaturedLeaderCard — wide horizontal card with yellow border
   Left: text info block  ·  Right: full-bleed photo
───────────────────────────────────────────────────────────────────────────── */
const FeaturedLeaderCard = ({ member, delay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={delay}>
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 20px 50px rgba(116,65,255,0.18)" }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="w-full rounded-[16px] overflow-hidden bg-white flex flex-row primary-card-hover"
      style={{
        // border: "1.5px solid #EFD830",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        minHeight: 210,
      }}
    >
      {/* Left: info */}
      <div className="flex-1 px-6 py-6 flex flex-col justify-center min-w-0">
        <h3 className="text-primary font-bold text-[20px] leading-tight">
          {member.name}
        </h3>
        <p className="text-[#111] font-bold text-[14px] mt-1">{member.role}</p>
        <p className="text-gray-500 text-[13px] leading-relaxed mt-2 max-w-xs">
          {member.description}
        </p>
        <div className="mt-5">
          <Socials socials={member.socials} size={30} />
        </div>
      </div>

      {/* Right: photo */}
      <div className="w-[240px] flex-shrink-0 relative overflow-hidden">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg,#241352 0%,#4D3398 60%,#1E1A2B 100%)",
            }}
          />
        )}
        {/* White-fade on left edge to blend into card */}
        <div
          className="absolute inset-y-0 left-0 w-14 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)",
          }}
        />
      </div>
    </motion.div>
  </ScrollAnimation>
);

function HorizontalScrollSection({ children, className = "" }) {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setShowLeft(el.scrollLeft > 8);
    setShowRight(maxScrollLeft - el.scrollLeft > 8);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateArrows();
    const onResize = () => updateArrows();
    const resizeObserver = new ResizeObserver(updateArrows);
    resizeObserver.observe(el);
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
    };
  }, [updateArrows]);

  const scrollByAmount = (direction) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 280, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`flex gap-4 pt-2 pb-4 overflow-x-auto scrollbar-hide ${className}`}
      >
        {children}
      </div>
      <div
        className={`pointer-events-none absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-[#12082B] via-[#12082B]/70 to-transparent transition-opacity duration-200 ${
          showLeft ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#12082B] via-[#12082B]/70 to-transparent transition-opacity duration-200 ${
          showRight ? "opacity-100" : "opacity-0"
        }`}
      />
      {showLeft && (
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll left"
          className="absolute left-2 top-[calc(50%-8px)] -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-white/25 bg-[#452798]/85 text-white shadow-lg shadow-black/40 backdrop-blur-sm hover:bg-[#683CE3] transition"
        >
          <span className="flex items-center justify-center">
            <ScrollArrow direction="left" />
          </span>
        </button>
      )}
      {showRight && (
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll right"
          className="absolute right-2 top-[calc(50%-8px)] -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-white/25 bg-[#452798]/85 text-white shadow-lg shadow-black/40 backdrop-blur-sm hover:bg-[#683CE3] transition"
        >
          <span className="flex items-center justify-center">
            <ScrollArrow direction="right" />
          </span>
        </button>
      )}
    </div>
  );
}
/* ─────────────────────────────────────────────────────────────────────────────
   BoardSection — yellow heading + horizontal scrollable TeamCard list
───────────────────────────────────────────────────────────────────────────── */
const BoardSection = ({ label, members, sectionDelay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={sectionDelay}>
    <div className="mb-12">
      <h2 className="text-tertiary font-bold text-h3 mb-5">{label}</h2>
      <HorizontalScrollSection>
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
    <section className="container py-10">
      {/* ── Year navigation bar ── */}
      <ScrollAnimation variant="fade-down">
        <div className="flex items-center justify-center gap-2 mb-10 w-fit mx-auto">
          {/* Year pills */}
          {YEARS.map((year) => {
            const isActive = year === activeYear;
            return (
              <motion.button
                key={year}
                id={`year-${year}`}
                onClick={() => setActiveYear(year)}
                whileTap={{ scale: 0.95 }}
                className={`relative px-7 py-[9px] rounded-full text-[15px] font-bold transition duration-300 overflow-hidden ${
                  isActive
                    ? "bg-primary text-white border border-white"
                    : "border border-primary  text-white hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="year-pill-bg"
                    className="absolute inset-0 rounded-full bg-primary"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {year}
              </motion.button>
            );
          })}
        </div>
      </ScrollAnimation>

      {/* ── Year content (fade-swap on year change) ── */}
      <AnimatePresence mode="wait">
        <motion.div
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
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

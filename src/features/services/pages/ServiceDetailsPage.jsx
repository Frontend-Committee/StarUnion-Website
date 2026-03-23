import { motion as Motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import HorizontalScrollSection from "@/components/common/HorizontalScrollSection";
import facebookIcon from "@/assets/icons/facebookIcon.png";
// import linkedinIcon from "@/assets/icons/linkedin.png";
// import instaIcon from "@/assets/icons/insta.png";
import { SERVICES_DATA, MOCK_TEAM_MEMBERS, MOCK_PROJECTS } from "@/utils/constants";

// ─── Static mock data per service (replace with API later) ───────────────────
const SERVICE_DETAILS = {
  "ui-ux": {
    whoWeAre:
      "We are a UI/UX Committee focused on creating user-centered digital experiences. We combine research, strategy, and design to deliver intuitive, functional, and scalable digital products for startups, student projects, and companies.",
    offerings: [
      { id: 1, label: "Mobile Applications Design",       icon: "mobile" },
      { id: 2, label: "Landing Pages & Promotional Pages", icon: "web" },
      { id: 3, label: "Web Applications",                  icon: "desktop" },
      { id: 4, label: "Interactive Prototypes",            icon: "prototype" },
      { id: 5, label: "E-commerce Platforms",              icon: "cart" },
      { id: 6, label: "UI/UX Consultation for Startups",  icon: "consult" },
    ],
    gallery: [
      { id: "g1", title: "UI UX",      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" },
      { id: "g2", title: "Mobile App", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { id: "g3", title: "Website",    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400&q=80" },
      { id: "g4", title: "E-commerce", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80" },
    ],
  },
  "front-end": {
    whoWeAre:
      "We are the Front-End Committee, building fast, accessible, and beautiful web interfaces using modern frameworks. We bridge design and engineering to deliver polished products users love.",
    offerings: [
      { id: 1, label: "React & Next.js Applications",  icon: "web" },
      { id: 2, label: "Responsive Web Design",          icon: "desktop" },
      { id: 3, label: "Performance Optimization",       icon: "prototype" },
      { id: 4, label: "Component Library Development",  icon: "mobile" },
      { id: 5, label: "Progressive Web Apps",           icon: "cart" },
      { id: 6, label: "Front-End Consultation",         icon: "consult" },
    ],
    gallery: [
      { id: "g1", title: "React App",    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80" },
      { id: "g2", title: "Landing Page", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" },
      { id: "g3", title: "Dashboard",    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80" },
      { id: "g4", title: "Portfolio",    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=400&q=80" },
    ],
  },
};

// Default fallback for services without specific detail data
const DEFAULT_DETAIL = (service) => ({
  whoWeAre: `We are the ${service?.title} Committee, dedicated to delivering excellence in our domain. We bring together talented members to work on real-world projects, share knowledge, and grow together as a community.`,
  offerings: [
    { id: 1, label: "Consultation & Strategy",    icon: "consult" },
    { id: 2, label: "Project Development",         icon: "web" },
    { id: 3, label: "Research & Analysis",         icon: "prototype" },
    { id: 4, label: "Training & Workshops",        icon: "desktop" },
    { id: 5, label: "Community Events",            icon: "cart" },
    { id: 6, label: "Mentorship Programs",         icon: "mobile" },
  ],
  gallery: [
    { id: "g1", title: "Project 1", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" },
    { id: "g2", title: "Project 2", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80" },
    { id: "g3", title: "Project 3", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80" },
    { id: "g4", title: "Project 4", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80" },
  ],
});

// ─── Offering Icon SVGs ───────────────────────────────────────────────────────
const OFFERING_ICONS = {
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M8 4v16M2 9h20" />
    </svg>
  ),
  desktop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  prototype: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  consult: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

// ─── TeamCard (identical to CommitteeDetailsPage) ─────────────────────────────
const TeamCard = ({ member, delay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={delay} className="flex-shrink-0">
    <Motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="w-[160px] sm:w-[200px] rounded-[14px] overflow-hidden border border-gray-200 bg-white flex flex-col"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
    >
      {/* Photo area */}
      <div className="relative w-full overflow-hidden bg-[#111827]" style={{ height: 200 }}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="object-cover object-top w-full h-full"
          />
        ) : (
          <div
            className="flex flex-col justify-end w-full h-full p-3"
            style={{ background: "linear-gradient(170deg,#122112 0%,#0a1f0a 35%,#1a1030 100%)" }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#11EDA4]/40" />
            <p className="text-white font-extrabold text-[10px] leading-tight">
              Developer Student Community
            </p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col px-3 pt-3 pb-4 bg-white flex-1">
        <h4 className="text-primary font-semibold text-[14px] leading-tight">
          {member.name}
        </h4>
        <p className="text-[#111] text-[12px] font-bold mt-[3px]">{member.role}</p>
        <p className="text-gray-500 text-[11px] leading-snug mt-[3px]">
          {member.description}
        </p>

        {/* Social buttons */}
        <div className="flex gap-[6px] mt-3">
          {member.socials?.facebook && (
            <a href={member.socials.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6 object-cover" />
            </a>
          )}
          {/* {member.socials?.linkedin && (
            <a href={member.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 object-cover" />
            </a>
          )}
          {member.socials?.instagram && (
            <a href={member.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" className="w-6 h-6 object-cover" />
            </a>
          )} */}
        </div>
      </div>
    </Motion.div>
  </ScrollAnimation>
);

// ─── Gallery Card (same ProjectCard DNA) ─────────────────────────────────────
const GalleryCard = ({ item, delay = 0 }) => (
    <ScrollAnimation variant="fade-up" delay={delay} className="flex-shrink-0">
    <Motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-[260px] rounded-[24px] overflow-hidden border border-white/10 flex flex-col relative bg-[#1A0B2E] transition-shadow hover:shadow-2xl hover:shadow-primary/20"
      style={{
        boxShadow: "0 12px 30px -10px rgba(0,0,0,0.5)",
      }}
    >
      {/* ── Background Image with specialized overlays ── */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-black/40" />

        {/* Decorative star icon from screenshot */}
        <div className="absolute top-4 right-4 text-white/30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
        </div>

        {/* item Title at Top */}
        <div className="absolute top-6 left-0 right-0 px-4 text-center">
          <h4 className="text-white font-black text-xl uppercase tracking-wider drop-shadow-md">
            {item.title}
          </h4>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-3 py-[10px] flex flex-col items-center gap-2 bg-[#0d0820] relative z-10">
        <div className="px-3 pt-1 pb-4 mx-auto">
          <button className="inline-block px-4 py-[6px] text-[13px] bg-white text-primary border border-primary rounded-md font-medium hover:bg-white/70 hover:text-primary transition duration-200">
            View Details
          </button>
        </div>
      </div>
    </Motion.div>
  </ScrollAnimation>

);

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ServiceDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = SERVICES_DATA.find((s) => s.slug === id);
  const detail = SERVICE_DETAILS[id] || DEFAULT_DETAIL(service);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradientBg3">
        <p className="text-white text-h3">Service not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-4 py-12 bg-gradientBg3 md:px-8 md:py-16">
      <div className="max-w-[860px] mx-auto">

        {/* ── Back button ── */}
        <ScrollAnimation variant="fade-right">
          <button
            onClick={() => navigate("/services")}
            className="flex items-center gap-2 mb-8 text-white transition-colors cursor-pointer hover:text-tertiary group"
            id="back-to-services"
          >
            <div className="p-2 rounded-full border border-white/20 group-hover:bg-white/10 transition-colors">
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-semibold uppercase tracking-widest text-xs">
              Back to Services
            </span>
          </button>
        </ScrollAnimation>

        {/* ── Page Title ── */}
        <ScrollAnimation variant="fade-up">
          <h1 className="text-h2 font-bold text-tertiary mb-6">
            {service.title} Services
          </h1>
        </ScrollAnimation>

        {/* ── Who We Are card ── */}
        <ScrollAnimation variant="fade-up" delay={100}>
          <div className="rounded-2xl bg-primary px-6 py-6 mb-10 shadow-lg">
            <h2 className="text-tertiary font-bold text-[16px] mb-3">Who We Are</h2>
            <p className="text-white/90 text-sm leading-relaxed">{detail.whoWeAre}</p>
          </div>
        </ScrollAnimation>

        {/* ── Team members ── */}
        <ScrollAnimation variant="fade-up" delay={150}>
          <div className="mb-12">
            <HorizontalScrollSection>
              {MOCK_TEAM_MEMBERS.map((member, i) => (
                <TeamCard
                  key={`${member.id}-${i}`}
                  member={member}
                  delay={i * 80}
                />
              ))}
            </HorizontalScrollSection>
          </div>
        </ScrollAnimation>

        {/* ── Our Services list ── */}
        <ScrollAnimation variant="fade-up" delay={200}>
          <h2 className="text-tertiary font-bold text-h3 mb-6 border-b-2 pb-3 border-tertiary w-fit ">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {detail.offerings.map((item, i) => (
              <Motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="flex items-center gap-3 py-3 rounded-xl transition-colors"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary border border-primary/40 flex items-center justify-center text-white">
                  {OFFERING_ICONS[item.icon] || OFFERING_ICONS.web}
                </span>
                <span className="text-white text-sm font-medium">{item.label}</span>
              </Motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* ── item Gallery ── */}
        <ScrollAnimation variant="fade-up" delay={250}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-tertiary font-bold text-h3">Project Gallery</h2>
            
          </div>

          <HorizontalScrollSection>
            {detail.gallery.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                delay={i * 80}
              />
            ))}
          </HorizontalScrollSection>
        </ScrollAnimation>

      </div>
    </section>
  );
}
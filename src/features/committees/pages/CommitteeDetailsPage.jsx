import { motion as Motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import facebookIcon from "../../../assets/icons/facebookIcon.png";
import {
  COMMITTEES_DATA,
  MOCK_PROJECTS,
  MOCK_TEAM_MEMBERS,
} from "../../../utils/constants";

import HorizontalScrollSection from "../../../components/common/HorizontalScrollSection";

/* ────────────────────────────────────────
   Team Member Card — matches Figma exactly
   • White card
   • Full-bleed dark photo area (top ~60%)
   • White bottom: purple name, bold role, gray desc, coloured social buttons
──────────────────────────────────────── */
const TeamCard = ({ member, delay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={delay} className="flex-shrink-0">
    <Motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="w-[220px] rounded-[14px] overflow-hidden border border-gray-200 bg-white h-[380px] flex flex-col primary-card-hover"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
    >
      {/* ── Photo / Banner area ── */}
      <div
        className="relative w-full bg-[#111827] overflow-hidden"
        style={{ height: 230 }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="object-cover object-top w-full h-full"
          />
        ) : (
          /* DSC-style placeholder matching the Figma banner */
          <div
            className="flex flex-col justify-end w-full h-full p-3"
            style={{
              background:
                "linear-gradient(170deg, #122112 0%, #0a1f0a 35%, #1a1030 100%)",
            }}
          >
            {/* Green accent bar left */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#11EDA4]/40" />
            <p className="text-white font-extrabold text-[10px] leading-tight mb-0.5">
              Developer Student Community
            </p>
            <p className="text-white/50 text-[8px] leading-tight">
              Team Big With D... ypt
            </p>
            <p className="text-white/40 text-[8px]">Learn | Build | Grow</p>
          </div>
        )}
      </div>

      {/* ── Info section ── */}
      <div className="flex flex-col px-3 pt-3 pb-4 bg-white">
        <h4 className="text-primary font-semibold text-[14px] leading-tight">
          {member.name}
        </h4>
        <p className="text-[#111] text-[12px] font-bold mt-[3px]">
          {member.role}
        </p>
        <p className="text-gray-500 text-[11px] leading-snug mt-[3px]">
          {member.description}
        </p>

        {/* Coloured icon buttons */}
        <div className="flex gap-[6px] mt-3">
          {member.socials?.facebook && (
            <img src={facebookIcon} alt="" srcset="" className="w-6 h-6 object-cover" />
          )}  {member.socials?.facebook && (
            <img src={facebookIcon} alt="" srcset="" className="w-6 h-6 object-cover" />
          )}  {member.socials?.facebook && (
            <img src={facebookIcon} alt="" srcset="" className="w-6 h-6 object-cover" />
          )}
          {/* {member.socials?.linkedin && (
            <a
              href={member.socials.linkedin}
              className="w-[26px] h-[26px] rounded-[5px] bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[14px] h-[14px]"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </a>
          )}
          {member.socials?.instagram && (
            <a
              href={member.socials.instagram}
              className="w-[26px] h-[26px] rounded-[5px] bg-[#25D366] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              aria-label="WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[14px] h-[14px]"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          )} */}
        </div>
      </div>
    </Motion.div>
  </ScrollAnimation>
);

/* ────────────────────────────────────────
   Project Card — matches Figma exactly
   • Dark card
   • Top: full screenshot-style preview with overlay bold text
   • Bottom row: yellow project title + purple "View Details" button
──────────────────────────────────────── */
const ProjectCard = ({ project, delay = 0 }) => (
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
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-black/40" />
        
        {/* Decorative star icon from screenshot */}
        <div className="absolute top-4 right-4 text-white/30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
        </div>

        {/* Project Title at Top */}
        <div className="absolute top-6 left-0 right-0 px-4 text-center">
          <h4 className="text-white font-black text-xl uppercase tracking-wider drop-shadow-md">
            {project.title}
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

/* ── main page ── */
export default function CommitteeDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const committee = COMMITTEES_DATA.find((c) => c.slug === slug);

  if (!committee) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradientBg3">
        <p className="text-white text-h3">Committee not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-4 py-12 bg-gradientBg3 md:px-8 md:py-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Back button */}
        <ScrollAnimation variant="fade-right">
          <button
            onClick={() => navigate("/committees")}
            className="flex items-center gap-2 mb-12 text-white transition-colors cursor-pointer hover:text-tertiary group"
            id="back-to-committees"
          >
            <div className="p-2 rounded-full border border-white/20 group-hover:bg-white/10 transition-colors">
              <svg
                className="w-6 h-6 transition-transform group-hover:-translate-x-1"
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
            <span className="font-semibold uppercase tracking-widest text-xs">Back to Committees</span>
          </button>
        </ScrollAnimation>

        {/* Section: Meet the team */}
        <ScrollAnimation variant="fade-up" delay={100}>
          <div className="mb-12">
            <h1 className="font-semibold leading-tight text-tertiary text-h2">
              Meet the talented team
            </h1>
            <h2 className="mt-2 font-bold leading-tight text-white/60 text-xl md:text-2xl">
              Who make all this happen
            </h2>
          </div>
        </ScrollAnimation>

        {/* Team members row */}
        <ScrollAnimation variant="fade-up" delay={200}>
          <div className="mb-14">
            <HorizontalScrollSection>
              {MOCK_TEAM_MEMBERS.map((member, i) => (
                <TeamCard
                  key={member.id + "-" + i}
                  member={member}
                  delay={i * 80}
                />
              ))}
            </HorizontalScrollSection>
          </div>
        </ScrollAnimation>

        {/* Section: Looking for talented people */}
        <ScrollAnimation variant="fade-up" delay={300}>
          <div className="mb-14">
            <h3 className="mb-3 font-semibold text-tertiary text-h3">
              We're looking for talented people
            </h3>
            <p className="max-w-xl font-normal leading-relaxed text-white text-body">
              Members collaborate to create wireframes, prototypes, and final UI
              designs for different projects.
            </p>
          </div>
        </ScrollAnimation>

        {/* Section: Recent Projects */}
        <ScrollAnimation variant="fade-up" delay={400}>
          <div>
            <h3 className="mb-6 font-semibold text-tertiary text-h3">
              Recent Projects
            </h3>

            <HorizontalScrollSection>
              {MOCK_PROJECTS.map((project, i) => (
                <ProjectCard
                  key={project.id + "-" + i}
                  project={project}
                  delay={i * 80}
                />
              ))}
            </HorizontalScrollSection>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

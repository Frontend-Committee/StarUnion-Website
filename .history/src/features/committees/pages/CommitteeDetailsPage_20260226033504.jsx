import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import {
  COMMITTEES_DATA,
  MOCK_PROJECTS,
  MOCK_TEAM_MEMBERS,
} from "../../../utils/constants";

/* ────────────────────────────────────────
   Team Member Card — matches Figma exactly
   • White card
   • Full-bleed dark photo area (top ~60%)
   • White bottom: purple name, bold role, gray desc, coloured social buttons
──────────────────────────────────────── */
const TeamCard = ({ member, delay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={delay} className="flex-shrink-0">
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(116,65,255,0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="w-[185px] rounded-[14px] overflow-hidden border border-gray-200 bg-white flex flex-col"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
    >
      {/* ── Photo / Banner area ── */}
      <div
        className="relative w-full bg-[#111827] overflow-hidden"
        style={{ height: 200 }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          /* DSC-style placeholder matching the Figma banner */
          <div
            className="w-full h-full flex flex-col justify-end p-3"
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
      <div className="bg-white px-3 pt-3 pb-4 flex flex-col">
        <h4 className="text-primary font-extrabold text-[14px] leading-tight">
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
            <a
              href={member.socials.facebook}
              className="w-[26px] h-[26px] rounded-[5px] bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[14px] h-[14px]"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          )}
          {member.socials?.linkedin && (
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
          )}
        </div>
      </div>
    </motion.div>
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
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(116,65,255,0.25)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="w-[185px] rounded-[14px] overflow-hidden border border-purple-500/20 flex flex-col"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.30)" ,background: }}
    >
      {/* ── Title on top centered ── */}
      <div className="px-3 pt-3 pb-2 text-center">
        <p className="text-white/50 text-[8px] font-semibold tracking-[0.08em] uppercase mb-[2px]">
          {project.subtitle}
        </p>
        <h4 className="text-white font-black text-[16px] leading-none tracking-tight">
          {project.title}
        </h4>
      </div>

      {/* ── Screenshot preview area ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 200 }}>
        {/* Real background image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Shadow overlay from bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,2,22,0.95) 0%, rgba(8,2,22,0.5) 50%, rgba(8,2,22,0.1) 100%)",
          }}
        />

        {/* Shadow overlay from top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,2,22,0.6) 0%, transparent 40%)",
          }}
        />

        {/* Decorative star top-right */}
        <div className="absolute top-2 right-2 opacity-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
              fill="white"
              fillOpacity="0.2"
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* ── Bottom bar — title + button centered ── */}
      <div className="px-3 py-[10px] flex flex-col items-center gap-2 bg-[#0d0820]">
        <div className="px-3 pb-4 pt-1 mx-auto">
          <button className="inline-block px-4 py-[6px] text-[13px] bg-white text-primary border border-primary rounded-md font-medium hover:bg-white/70 hover:text-primary transition duration-200">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  </ScrollAnimation>
);

/* ── main page ── */
export default function CommitteeDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const committee = COMMITTEES_DATA.find((c) => c.slug === slug);

  if (!committee) {
    return (
      <div className="min-h-screen bg-gradientBg3 flex items-center justify-center">
        <p className="text-white text-h3">Committee not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradientBg3 py-8 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Back button */}
        <ScrollAnimation variant="fade-right">
          <button
            onClick={() => navigate("/committees")}
            className="text-white hover:text-secondary transition-colors mb-8 flex items-center gap-2 group cursor-pointer"
            id="back-to-committees"
          >
            <svg
              className="w-8 h-8 group-hover:-translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </ScrollAnimation>

        {/* Section: Meet the team */}
        <ScrollAnimation variant="fade-up" delay={100}>
          <div className="mb-10">
            <h1 className="text-tertiary text-h2 font-semibold leading-tight">
              Meet the talented team
            </h1>
            <h2 className="text-tertiary text-h2 font-semibold leading-tight mt-1">
              Who make all this happen
            </h2>
          </div>
        </ScrollAnimation>

        {/* Team members row */}
        <ScrollAnimation variant="fade-up" delay={200}>
          <div className="flex gap-4 overflow-x-auto pb-4 mb-14 scrollbar-hide">
            {MOCK_TEAM_MEMBERS.map((member, i) => (
              <TeamCard
                key={member.id + "-" + i}
                member={member}
                delay={i * 80}
              />
            ))}
          </div>
        </ScrollAnimation>

        {/* Section: Looking for talented people */}
        <ScrollAnimation variant="fade-up" delay={300}>
          <div className="mb-14">
            <h3 className="text-tertiary text-h3 font-semibold mb-3">
              We're looking for talented people
            </h3>
            <p className="text-white text-body font-normal max-w-xl leading-relaxed">
              Members collaborate to create wireframes, prototypes, and final UI
              designs for different projects.
            </p>
          </div>
        </ScrollAnimation>

        {/* Section: Recent Projects */}
        <ScrollAnimation variant="fade-up" delay={400}>
          <div>
            <h3 className="text-tertiary text-h3 font-semibold mb-6">
              Recent Projects
            </h3>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {MOCK_PROJECTS.map((project, i) => (
                <ProjectCard
                  key={project.id + "-" + i}
                  project={project}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

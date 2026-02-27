import { useNavigate, useParams } from "react-router-dom";
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import {
  COMMITTEES_DATA,
  MOCK_PROJECTS,
  MOCK_TEAM_MEMBERS,
} from "../../../utils/constants";
import { motion } from "framer-motion";

/* ── tiny inline social icons ── */
const SocialIcon = ({ type, href }) => {
  const icons = {
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    instagram: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-4 h-4"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  };
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-secondary transition-colors"
    >
      {icons[type]}
    </a>
  );
};

/* ── team member card ── */
const TeamCard = ({ member, delay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={delay} className="flex-shrink-0">
    <motion.div
      whileHover={{ y: -4 }}
      className="min-w-[220px] max-w-[260px] h-full rounded-[16px] overflow-hidden border border-primary/30 bg-[#160d2e]"
    >
      {/* Banner */}
      <div
        className="h-[80px] relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #241352 0%, #4D3398 60%, #1E1A2B 100%)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[9px] text-white/60 font-bold text-center leading-tight px-3">
            <span className="text-secondary text-[10px] block">
              Developer Student Community
            </span>
            <span className="text-white/40 mt-1 block">
              Learn | Build | Grow
            </span>
          </p>
        </div>
      </div>

      {/* Photo */}
      <div className="px-4 -mt-1">
        <div className="w-full aspect-square bg-gradient-to-b from-[#2a1f4e] to-[#1a1530] rounded-lg overflow-hidden flex items-center justify-center">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg
              className="w-16 h-16 text-primary/30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" />
            </svg>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 pt-3 flex flex-col flex-1">
        <h4 className="text-white font-bold text-[15px] leading-tight">
          {member.name}
        </h4>
        <p className="text-white text-[13px] mt-1 font-semibold">
          {member.role}
        </p>
        <p className="text-gray-400 text-[12px] mt-1 leading-snug">
          {member.description}
        </p>

        {/* Social icons */}
        <div className="flex gap-2 mt-auto pt-3">
          {member.socials?.facebook && (
            <SocialIcon type="facebook" href={member.socials.facebook} />
          )}
          {member.socials?.linkedin && (
            <SocialIcon type="linkedin" href={member.socials.linkedin} />
          )}
          {member.socials?.instagram && (
            <SocialIcon type="instagram" href={member.socials.instagram} />
          )}
        </div>
      </div>
    </motion.div>
  </ScrollAnimation>
);

/* ── project card ── */
const ProjectCard = ({ project, delay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={delay} className="flex-shrink-0">
    <motion.div
      whileHover={{ y: -4 }}
      className="min-w-[220px] max-w-[260px] h-full rounded-[16px] overflow-hidden border border-primary/30 bg-[#160d2e]"
    >
      {/* Project image area */}
      <div
        className="h-[160px] relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #241352 0%, #4D3398 80%, #11EDA420 100%)`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-start justify-end p-4">
          <p className="text-white/50 text-[10px] font-semibold tracking-wider">
            {project.subtitle}
          </p>
          <h4 className="text-white text-[18px] font-extrabold leading-tight">
            {project.type}
          </h4>
        </div>
        {/* Decorative dots */}
        <div className="absolute top-4 right-4 flex flex-col gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/20" />
        </div>
      </div>

      {/* Bottom */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-white font-bold text-[14px] mb-3">{project.title}</p>
        <button className="px-4 py-[6px] text-[12px] text-secondary border border-secondary rounded-md hover:bg-secondary/10 transition-colors font-bold mt-auto self-start">
          View Details
        </button>
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
            <h1 className="text-tertiary text-h2 font-extrabold leading-tight">
              Meet the talented team
            </h1>
            <h2 className="text-tertiary text-h2 font-extrabold leading-tight mt-1">
              Who make all this happen
            </h2>
          </div>
        </ScrollAnimation>

        {/* Team members row */}
        <ScrollAnimation variant="fade-up" delay={200}>
          <div className="flex gap-5 overflow-x-auto pb-4 mb-14 scrollbar-hide">
            {MOCK_TEAM_MEMBERS.map((member, i) => (
              <TeamCard
                key={member.id + "-" + i}
                member={member}
                delay={i * 100}
              />
            ))}
          </div>
        </ScrollAnimation>

        {/* Section: Looking for talented people */}
        <ScrollAnimation variant="fade-up" delay={300}>
          <div className="mb-14">
            <h3 className="text-white text-h3 font-extrabold mb-3">
              We're looking for talented people
            </h3>
            <p className="text-gray-400 text-body font-normal max-w-xl leading-relaxed">
              Members collaborate to create wireframes, prototypes, and final UI
              designs for different projects.
            </p>
          </div>
        </ScrollAnimation>

        {/* Section: Recent Projects */}
        <ScrollAnimation variant="fade-up" delay={400}>
          <div>
            <h3 className="text-tertiary text-h3 font-extrabold mb-6">
              Recent Projects
            </h3>

            <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
              {MOCK_PROJECTS.map((project, i) => (
                <ProjectCard
                  key={project.id + "-" + i}
                  project={project}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

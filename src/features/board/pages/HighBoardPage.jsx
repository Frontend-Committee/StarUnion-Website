import { AnimatePresence, motion as Motion } from "framer-motion";
import { useState, useEffect } from "react";
// Removed unused facebookIcon
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import HorizontalScrollSection from "../../../components/common/HorizontalScrollSection";
import * as authApi from "@/lib/api/authApi";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import defaultAvatar from "@/assets/images/ProfilePage/defaultImg.png";

/* ─────────────────────────────────────────────────────────────────────────────
   Shared social icons helper
───────────────────────────────────────────────────────────────────────────── */
const Socials = ({ socials }) => (
  <div className="flex items-center gap-4 mt-2">
    {socials?.facebook && (
      <a
        href={socials.facebook}
        target="_blank"
        rel="noreferrer"
        className="text-[#452798]/60 hover:text-[#1877F2] transition-all transform hover:scale-110"
      >
        <i className="fa-brands fa-facebook text-[18px]"></i>
      </a>
    )}
    {socials?.linkedin && (
      <a
        href={socials.linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-[#452798]/60 hover:text-[#0A66C2] transition-all transform hover:scale-110"
      >
        <i className="fa-brands fa-linkedin text-[18px]"></i>
      </a>
    )}
    {socials?.github && (
      <a
        href={socials.github}
        target="_blank"
        rel="noreferrer"
        className="text-[#452798]/60 hover:text-[#181717] transition-all transform hover:scale-110"
      >
        <i className="fa-brands fa-github text-[18px]"></i>
      </a>
    )}
    {socials?.instagram && (
      <a
        href={socials.instagram}
        target="_blank"
        rel="noreferrer"
        className="text-[#452798]/60 hover:text-[#E4405F] transition-all transform hover:scale-110"
      >
        <i className="fa-brands fa-instagram text-[18px]"></i>
      </a>
    )}
    {socials?.whatsapp && (
      <a
        href={`https://wa.me/${socials.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="text-[#452798]/60 hover:text-[#25D366] transition-all transform hover:scale-110"
      >
        <i className="fa-brands fa-whatsapp text-[18px]"></i>
      </a>
    )}
  </div>
);

const TeamCard = ({ member, delay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={delay} className="flex-shrink-0">
    <Motion.div
      className="w-[220px] h-[380px] rounded-[14px] overflow-hidden border border-gray-200 bg-white flex flex-col primary-card-hover"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
    >
      <div
        className="relative w-full bg-[#111827] overflow-hidden"
        style={{ height: 230 }}
      >
        <img
          src={member.photo}
          alt={member.name}
          className="object-cover object-top w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start gap-1 px-4 pt-4 pb-5 bg-white">
        <h4 className="text-primary font-bold text-[16px] leading-tight line-clamp-1">
          {member.name}
        </h4>
        <p className="text-[#111] text-[14px] font-bold">{member.role}</p>
        <p className="text-gray-500 text-[13px] leading-snug truncate-2-lines">
          {member.description}
        </p>
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
      className="w-full rounded-[16px] overflow-hidden bg-white flex flex-row primary-card-hover"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)", minHeight: 140 }}
    >
      <div className="w-[120px] h-auto md:w-[240px] flex-shrink-0 relative overflow-hidden order-2">
        <img
          src={member.photo}
          alt={member.name}
          className="object-cover object-top w-full h-full"
        />
        <div
          className="absolute inset-y-0 left-0 w-10 pointer-events-none md:w-14"
          style={{
            background:
              "linear-gradient(to right,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      <div className="flex flex-col justify-center flex-1 order-1 min-w-0 px-4 py-4 text-left md:px-8 md:py-8">
        <h3 className="text-primary font-bold text-[18px] md:text-[24px] leading-tight">
          {member.name}
        </h3>
        <p className="text-[#111] font-bold text-[13px] md:text-[17px] mt-1">
          {member.role}
        </p>
        <p className="text-gray-500 text-[12px] md:text-[15px] leading-relaxed mt-1 md:mt-3 line-clamp-3">
          {member.description}
        </p>
        <div className="mt-3 md:mt-5">
          <Socials socials={member.socials} />
        </div>
      </div>
    </Motion.div>
  </ScrollAnimation>
);

const BoardSection = ({ label, members, sectionDelay = 0 }) => (
  <ScrollAnimation variant="fade-up" delay={sectionDelay}>
    <div className="mb-12">
      <h2 className="px-4 mb-6 text-3xl font-bold text-tertiary md:text-4xl md:px-0">
        {label}
      </h2>
      <HorizontalScrollSection className="px-4 md:px-0">
        {members.map((member, i) => (
          <TeamCard key={member.id} member={member} delay={i * 70} />
        ))}
      </HorizontalScrollSection>
    </div>
  </ScrollAnimation>
);

const YEARS = [2025, 2023];

export default function HighBoardPage() {
  const [activeYear, setActiveYear] = useState(2025);
  const [featured, setFeatured] = useState([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoard = async () => {
      setLoading(true);
      try {
        const params = {
          is_highboard: true,
          year: `${activeYear}-09-30`,
        };
        let allMembersRaw = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const res = await authApi.getMemberships({ ...params, page });
          const results = res.results || (Array.isArray(res) ? res : []);
          allMembersRaw = [...allMembersRaw, ...results];

          if (res.next && results.length > 0 && page < 10) {
            page++;
          } else {
            hasMore = false;
          }
        }

        // Fetch full profiles for each member to get social links
        const enrichedMembers = await Promise.all(
          allMembersRaw.map(async (m) => {
            try {
              if (m.user?.id) {
                const fullUser = await authApi.getUserProfileById(m.user.id);
                return { ...m, user: { ...m.user, ...fullUser } };
              }
            } catch {
              console.warn(
                `Could not fetch full profile for user ${m.user?.id}`,
              );
            }
            return m;
          }),
        );

        const formatted = enrichedMembers.map((m) => {
          let description = m.committee || "High Board Member";
          if (m.data && typeof m.data === "object" && m.data.description) {
            description = m.data.description;
          }

          return {
            id: m.id,
            name: m.user?.full_name || "Anonymous",
            role: m.role,
            description: description,
            committee: m.committee,
            photo: m.user?.profile_photo
              ? m.user.profile_photo.startsWith("http")
                ? m.user.profile_photo
                : `https://staging.starunion.tech${m.user.profile_photo}`
              : defaultAvatar,
            socials: {
              facebook: m.user?.facebook,
              linkedin: m.user?.linkedin,
              github: m.user?.github,
              instagram: m.user?.instagram,
              whatsapp: m.user?.whatsapp,
            },
          };
        });

        // Grouping logic
        const getRoleMembers = (roleName, exact = false) =>
          formatted.filter((m) =>
            exact
              ? m.role?.toLowerCase() === roleName.toLowerCase()
              : m.role?.toLowerCase().includes(roleName.toLowerCase()),
          );

        const president = getRoleMembers("President", true);
        const vPresident = getRoleMembers("Vice President");
        const genManager = getRoleMembers("General Manager");

        setFeatured([...president, ...vPresident, ...genManager]);

        const managers = formatted.filter(
          (m) =>
            m.role?.toLowerCase().includes("manager") &&
            !m.role?.toLowerCase().includes("general"),
        );
        const heads = getRoleMembers("Head", true);
        const viceHeads = getRoleMembers("Vice Head");

        // Catch members not in the main groups
        const categorizedIds = new Set(
          [
            ...president,
            ...vPresident,
            ...genManager,
            ...managers,
            ...heads,
            ...viceHeads,
          ].map((m) => m.id),
        );

        const otherMembers = formatted.filter((m) => !categorizedIds.has(m.id));

        const boardSections = [];
        if (managers.length > 0)
          boardSections.push({ label: "Managers", members: managers });
        if (heads.length > 0)
          boardSections.push({ label: "Heads", members: heads });
        if (viceHeads.length > 0)
          boardSections.push({ label: "Vice Heads", members: viceHeads });
        if (otherMembers.length > 0)
          boardSections.push({ label: "Board Members", members: otherMembers });

        setSections(boardSections);
      } catch (err) {
        console.error("Error loading board:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBoard();
  }, [activeYear]);

  return (
    <section className="container py-6 md:py-10 px-4 md:px-8 min-h-[600px]">
      <ScrollAnimation variant="fade-down">
        <div className="flex flex-wrap items-center justify-center w-full gap-2 mx-auto mb-10 md:w-fit">
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
                    : "border border-primary text-white hover:bg-white/10"
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

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingSpinner fullScreen={true} />
        ) : (
          <Motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
          >
            {featured.length > 0 && (
              <div className="flex flex-col gap-5 mb-14">
                {featured.map((leader, i) => (
                  <FeaturedLeaderCard
                    key={leader.id}
                    member={leader}
                    delay={i * 100}
                  />
                ))}
              </div>
            )}

            {sections.map((section, i) => (
              <BoardSection
                key={section.label}
                label={section.label}
                members={section.members}
                sectionDelay={i * 80}
              />
            ))}

            {!featured.length && !sections.length && (
              <p className="py-20 text-xl font-semibold text-center text-white/60">
                No high board members found for this year.
              </p>
            )}
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

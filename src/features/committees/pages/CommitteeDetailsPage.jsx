import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import { useQuery } from "@tanstack/react-query";
import { motion as Motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import HorizontalScrollSection from "../../../components/common/HorizontalScrollSection";
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import {
  getCommitteeDetail,
  listCommittees,
} from "../api/committeesService";

const getCommitteeDescription = (committee) =>
  committee?.data?.description ||
  committee?.data?.overview ||
  committee?.data?.about ||
  committee?.data?.summary ||
  `The ${committee?.name} committee builds real-world experiences and contributes to Star Union initiatives through collaborative project work.`;

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
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-black/40" />
        <div className="absolute left-0 right-0 px-4 text-center top-6">
          <h4 className="text-xl font-black tracking-wider text-white uppercase drop-shadow-md">
            {project.title}
          </h4>
        </div>
      </div>
      <div className="px-4 py-4 bg-[#0d0820]">
        <p className="text-sm leading-relaxed text-white/80 line-clamp-3 min-h-[60px]">
          {project.description ||
            "Explore this committee project in more detail."}
        </p>
        <Link
          to={`/projects/${project.id}`}
          className="inline-block px-4 py-[6px] mt-4 text-[13px] bg-white text-primary border border-primary rounded-md font-medium hover:bg-white/70 hover:text-primary transition duration-200"
        >
          View Details
        </Link>
      </div>
    </Motion.div>
  </ScrollAnimation>
);

export default function CommitteeDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const committeeName = decodeURIComponent(slug || "");

  const {
    data: committee,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["committee", committeeName],
    queryFn: () => getCommitteeDetail(committeeName),
    enabled: Boolean(committeeName),
  });

  // Fetch specifically using technical filter to determine status
  const { data: technicalCheck, isLoading: isCheckingTechnical } = useQuery({
    queryKey: ["committee-tech-check", committeeName],
    queryFn: () => listCommittees({ is_technical: true, search: committeeName }),
    enabled: Boolean(committeeName),
  });

  const isTechnical = technicalCheck?.results?.some(
    (c) =>
      c.name.toLowerCase() === committeeName.toLowerCase() ||
      committeeName.toLowerCase().includes(c.name.toLowerCase()) ||
      c.name.toLowerCase().includes(committeeName.toLowerCase()),
  );

  // If we have results from the technical check, we know the type.
  // Otherwise, if the check finished and no results, it's non-technical.
  const committeeType = isCheckingTechnical
    ? undefined
    : isTechnical
      ? "technical"
      : "non-technical";

  if (isLoading) {
    return <LoadingSpinner fullScreen={true} />;
  }

  if (isError || !committee) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-gradientBg3">
        <div className="w-full max-w-lg p-8 text-center border rounded-3xl border-white/10 bg-white/5">
          <p className="text-white text-h3">Committee not found</p>
          <p className="mt-3 text-white/70">
            {error?.response?.data?.detail ||
              error?.message ||
              "We could not load this committee right now."}
          </p>
          <button
            type="button"
            onClick={() => navigate("/committees")}
            className="px-5 py-2 mt-6 text-sm font-semibold text-white transition border rounded-full border-primary hover:bg-primary/10"
          >
            Back to Committees
          </button>
        </div>
      </div>
    );
  }

  const description = getCommitteeDescription(committee);

  return (
    <section className="min-h-screen px-4 py-12 md:px-8 md:py-20">
      <div className="max-w-[1100px] mx-auto">
        <ScrollAnimation variant="fade-right">
          <button
            onClick={() => navigate("/committees")}
            className="flex items-center gap-2 mb-12 text-white transition-colors cursor-pointer hover:text-tertiary group"
            id="back-to-committees"
          >
            <div className="p-2 transition-colors border rounded-full border-white/20 group-hover:bg-white/10">
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
            <span className="text-xs font-semibold tracking-widest uppercase">
              Back to Committees
            </span>
          </button>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-tertiary/80">
                Committee Overview
              </p>
              <h1 className="mt-4 font-semibold leading-tight text-tertiary text-h2">
                {committee.name}
              </h1>
              <p className="max-w-2xl mt-6 leading-relaxed text-white/85 ">
                {description}
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {committeeType && (
                  <span className="px-4 py-2 text-sm font-semibold text-white border rounded-full bg-white/10 border-white/10">
                    {committeeType === "technical"
                      ? "Technical Committee"
                      : "Non-Technical Committee"}
                  </span>
                )}
                <span className="px-4 py-2 text-sm font-semibold text-white border rounded-full bg-white/10 border-white/10">
                  {committee.projects.length} Projects
                </span>
              </div>
            </div>

            <div className="overflow-hidden border shadow-2xl rounded-[28px] border-white/10 bg-white/5">
              {committee.image ? (
                <img
                  src={committee.image}
                  alt={committee.name}
                  className="object-cover w-full h-full min-h-[280px]"
                />
              ) : (
                <div className="flex items-center justify-center min-h-[280px] text-lg font-semibold text-white/60">
                  {committee.name}
                </div>
              )}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up" delay={100}>
          <div className="grid gap-5 mt-12 md:grid-cols-3">
            <div className="p-6 border rounded-3xl border-white/10 bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tertiary/80">
                Identifier
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {committee.name}
              </p>
            </div>
            <div className="p-6 border rounded-3xl border-white/10 bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tertiary/80">
                Type
              </p>
              <p className="mt-3 text-lg font-semibold text-white capitalize">
                {committeeType.replace("-", " ")}
              </p>
            </div>
            <div className="p-6 border rounded-3xl border-white/10 bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tertiary/80">
                Active Projects
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {committee.projects.length}
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up" delay={150}>
          <div className="mt-14">
            <h2 className="font-semibold text-tertiary text-h3">Projects</h2>
            <p className="max-w-2xl mt-3 leading-relaxed text-white/70">
              Projects linked to this committee come directly from the committee
              detail endpoint.
            </p>
          </div>
        </ScrollAnimation>

        {committee.projects.length > 0 ? (
          <ScrollAnimation variant="fade-up" delay={200}>
            <div className="mt-8">
              <HorizontalScrollSection>
                {committee.projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    delay={index * 70}
                  />
                ))}
              </HorizontalScrollSection>
            </div>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation variant="fade-up" delay={200}>
            <div className="p-8 mt-8 text-center border rounded-3xl border-white/10 bg-white/5">
              <p className="text-lg font-semibold text-white">
                No projects available yet
              </p>
              <p className="mt-2 text-white/70">
                This committee detail response does not include any related
                projects.
              </p>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}

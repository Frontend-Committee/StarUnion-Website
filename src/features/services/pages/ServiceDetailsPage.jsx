import HorizontalScrollSection from "@/components/common/HorizontalScrollSection";
import CommitteeCard from "@/features/committees/components/CommitteeCard";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useQuery } from "@tanstack/react-query";
import { motion as Motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getServiceDetail } from "../api/servicesService";

const OFFERING_ICONS = {
  mobile: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
    >
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  web: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M8 4v16M2 9h20" />
    </svg>
  ),
  desktop: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  prototype: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  cart: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
    >
      <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  consult: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

const getServiceDescription = (service) =>
  service?.data?.description ||
  service?.data?.overview ||
  service?.data?.about ||
  service?.data?.summary ||
  service?.description ||
  `The ${service?.title} service supports Star Union initiatives with practical solutions and execution support.`;

const getServiceOfferings = (service) => {
  const candidates = [
    service?.data?.offerings,
    service?.data?.services,
    service?.data?.features,
    service?.data?.focus_areas,
    service?.data?.focusAreas,
    service?.committee,
  ];

  const list =
    candidates.find((item) => Array.isArray(item) && item.length > 0) || [];

  return list.map((item, index) => {
    if (typeof item === "string") {
      return {
        id: `${item}-${index}`,
        label: item,
        icon: index % 2 === 0 ? "web" : "consult",
      };
    }

    return {
      id: item.id || item.value || item.label || index,
      label: item.label || item.name || item.title || `Item ${index + 1}`,
      icon: item.icon || (index % 2 === 0 ? "web" : "consult"),
    };
  });
};

const ProjectServiceCard = ({ project, delay = 0 }) => (
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
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-black/40" />
        <div className="absolute top-4 right-4 text-white/30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
        </div>
        <div className="absolute top-6 left-0 right-0 px-4 text-center">
          <h4 className="text-white font-black text-xl uppercase tracking-wider drop-shadow-md">
            {project.name}
          </h4>
        </div>
      </div>
      <div className="px-3 py-[10px] flex flex-col items-center gap-2 bg-[#0d0820] relative z-10">
        <div className="px-3 pt-1 pb-4 mx-auto">
          {/* {project.id ? (
            <Link
              to={`/projects/${project.id}`}
              className="inline-block px-4 py-[6px] text-[13px] bg-white text-primary border border-primary rounded-md font-medium hover:bg-white/70 hover:text-primary transition duration-200"
            >
              View Details
            </Link>
          ) : (
            <span className="inline-block px-4 py-[6px] text-[13px] bg-white text-primary border border-primary rounded-md font-medium">
              View Details
            </span>
          )} */}
        </div>
      </div>
    </Motion.div>
  </ScrollAnimation>
);

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: service,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["service", id],
    queryFn: () => getServiceDetail(id),
    enabled: Boolean(id),
  });

  if (isLoading) {
    return <LoadingSpinner fullScreen={true} />;
  }

  if (isError || !service) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-gradientBg3">
        <div className="w-full max-w-lg p-8 text-center border rounded-3xl border-white/10 bg-white/5">
          <p className="text-white text-h3">Service not found</p>
          <p className="mt-3 text-white/70">
            {error?.response?.data?.detail ||
              error?.message ||
              "We could not load this service right now."}
          </p>
          <button
            type="button"
            onClick={() => navigate("/services")}
            className="px-5 py-2 mt-6 text-sm font-semibold text-white transition rounded-full border border-primary hover:bg-primary/10"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const description = getServiceDescription(service);
  const offerings = getServiceOfferings(service);

  return (
    <section className="min-h-screen px-4 py-12 bg-gradientBg3 md:px-8 md:py-16">
      <div className="max-w-[1000px] mx-auto">
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

        <ScrollAnimation variant="fade-up">
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-tertiary/80">
                Service Overview
              </p>
              <h1 className="mt-4 font-bold text-h2 text-tertiary">
                {service.title}
              </h1>
              <p className="mt-6 leading-relaxed text-white/85 text-body">
                {description}
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 text-sm font-semibold text-white rounded-full bg-white/10 border border-white/10">
                  {service.is_technical
                    ? "Technical Service"
                    : "Non-Technical Service"}
                </span>
                <span className="px-4 py-2 text-sm font-semibold text-white rounded-full bg-white/10 border border-white/10">
                  {service.committee.length} Committees
                </span>
                <span className="px-4 py-2 text-sm font-semibold text-white rounded-full bg-white/10 border border-white/10">
                  {service.projects.length} Related Projects
                </span>
              </div>
            </div>

            <div className="overflow-hidden border shadow-2xl rounded-[28px] border-white/10 bg-white/5">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full min-h-[280px]"
                />
              ) : (
                <div className="flex items-center justify-center min-h-[280px] text-lg font-semibold text-white/60">
                  {service.title}
                </div>
              )}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up" delay={100}>
          <div className="grid gap-5 mt-12 md:grid-cols-3">
            <div className="p-6 border rounded-3xl border-white/10 bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tertiary/80">
                Service ID
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {service.id}
              </p>
            </div>
            <div className="p-6 border rounded-3xl border-white/10 bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tertiary/80">
                Committees
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {service.committee.length}
              </p>
            </div>
            <div className="p-6 border rounded-3xl border-white/10 bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tertiary/80">
                Related Projects
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {service.projects.length}
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {service.committee.length > 0 && (
          <ScrollAnimation variant="fade-up" delay={150}>
            <div className="mt-14">
              <h2 className="text-tertiary font-bold text-h3 mb-5">
                Associated Committees
              </h2>
              <HorizontalScrollSection>
                {service.committee.map((committee, index) => (
                  <CommitteeCard
                    key={committee.id || committee.name}
                    committee={committee}
                    delay={index * 70}
                  />
                ))}
              </HorizontalScrollSection>
            </div>
          </ScrollAnimation>
        )}

        {offerings.length > 0 && (
          <ScrollAnimation variant="fade-up" delay={200}>
            <div className="mt-14">
              <h2 className="text-tertiary font-bold text-h3 mb-6">
                Capabilities
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {offerings.map((item, index) => (
                  <Motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.3 }}
                    className="flex items-center gap-3 px-4 py-4 border rounded-2xl border-white/10 bg-white/5"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary border border-primary/40 flex items-center justify-center text-white">
                      {OFFERING_ICONS[item.icon] || OFFERING_ICONS.web}
                    </span>
                    <span className="text-white text-sm font-medium">
                      {item.label}
                    </span>
                  </Motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        )}

        {service.projects.length > 0 && (
          <ScrollAnimation variant="fade-up" delay={250}>
            <div className="mt-14">
              <h2 className="text-tertiary font-bold text-h3 mb-5">
                Project References
              </h2>
              <HorizontalScrollSection>
                {service.projects.map((project, index) => (
                  <ProjectServiceCard
                    key={project.id || project.name}
                    project={project}
                    delay={index * 70}
                  />
                ))}
              </HorizontalScrollSection>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}

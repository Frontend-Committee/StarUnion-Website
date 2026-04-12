import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { listProjects } from "@/lib/api/endpoints";
import { SERVICE_CATEGORIES } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useMemo, useState } from "react";
import { getTechnicalFilterValue, listServices } from "../api/servicesService";
import ServiceCard from "../components/ServiceCard";

const FILTER_TABS = [
  { label: "All", value: SERVICE_CATEGORIES.ALL },
  { label: "Technical", value: SERVICE_CATEGORIES.TECHNICAL },
  { label: "Non-Technical", value: SERVICE_CATEGORIES.NON_TECHNICAL },
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(SERVICE_CATEGORIES.ALL);
  const [page, setPage] = useState(1);
  const trimmedSearchQuery = searchQuery.trim();
  const technicalFilter = getTechnicalFilterValue(activeFilter);

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: [
      "services",
      {
        page,
        search: trimmedSearchQuery,
        isTechnical: technicalFilter,
      },
    ],
    queryFn: () =>
      listServices({
        page,
        search: trimmedSearchQuery || undefined,
        is_technical: technicalFilter,
      }),
  });

  const {
    data: ecosystemProjects = [],
    isLoading: isEcosystemLoading,
    isError: isEcosystemError,
  } = useQuery({
    queryKey: ["ecosystem-projects"],
    queryFn: () => listProjects({ is_ecosystem: true }),
  });

  const services = data?.results || [];
  const filteredEcosystem = useMemo(() => {
    if (!searchQuery) return ecosystemProjects;
    return ecosystemProjects.filter((project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [ecosystemProjects, searchQuery]);

  const showEcosystem = activeFilter === SERVICE_CATEGORIES.ALL;

  if (isLoading) {
    return <LoadingSpinner fullScreen={true} />;
  }

  return (
    <section className="container min-h-screen px-4 py-10 md:px-8 ">
      <div className="max-w-[1200px] mx-auto ">
        <ScrollAnimation variant="fade-down">
          <h1 className="mb-8 font-semibold text-h2 text-tertiary">Services</h1>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up" delay={100}>
          <div className="relative mb-5">
            <div className="absolute inset-y-0 flex items-center pointer-events-none left-4">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              id="service-search"
              type="text"
              placeholder="Search Services..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#2a2050] focus:border-primary focus:outline-none placeholder-gray-500 text-body font-normal transition-colors"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up" delay={200}>
          <div className="flex gap-3 mb-10">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                id={`service-filter-${tab.value}`}
                onClick={() => {
                  setActiveFilter(tab.value);
                  setPage(1);
                }}
                className={`p-2 md:px-6 md:py-2 w-48 rounded-full text-[14px] font-bold transition-all duration-300 ${
                  activeFilter === tab.value
                    ? "bg-primary text-white border border-white"
                    : "border border-primary text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up" delay={250}>
          <div className="flex flex-col gap-3 mb-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/70">
              {data?.count || 0} services found
            </p>
            {isFetching && (
              <p className="text-sm font-medium text-tertiary">
                Updating results...
              </p>
            )}
          </div>
        </ScrollAnimation>

        {isError && (
          <ScrollAnimation variant="fade-up">
            <div className="p-6 mb-8 border rounded-2xl border-red-400/20 bg-red-500/10">
              <p className="font-semibold text-red-200">
                Could not load services
              </p>
              <p className="mt-2 text-sm text-red-100/80">
                {error?.response?.data?.detail ||
                  error?.message ||
                  "Something went wrong while fetching services."}
              </p>
            </div>
          </ScrollAnimation>
        )}

        <Motion.div
          layout
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {services.map((service, index) => (
              <Motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <ServiceCard service={service} delay={(index % 4) * 100} />
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>

        {!isError && services.length === 0 && (
          <ScrollAnimation variant="fade-up">
            <div className="py-16 text-center">
              <p className="text-gray-400 text-h4">No services found</p>
              <p className="mt-2 font-normal text-gray-500 text-body">
                Try adjusting your search or filter
              </p>
            </div>
          </ScrollAnimation>
        )}

        {!!data?.count && (
          <ScrollAnimation variant="fade-up" delay={300}>
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                type="button"
                onClick={() =>
                  setPage((currentPage) => Math.max(currentPage - 1, 1))
                }
                disabled={!data?.previous || page === 1 || isFetching}
                className="px-5 py-2 text-sm font-semibold text-white transition border rounded-full border-primary disabled:cursor-not-allowed disabled:opacity-40 hover:bg-primary/10"
              >
                Previous
              </button>
              <span className="text-sm text-white/70">Page {page}</span>
              <button
                type="button"
                onClick={() => setPage((currentPage) => currentPage + 1)}
                disabled={!data?.next || isFetching}
                className="px-5 py-2 text-sm font-semibold text-white transition border rounded-full border-primary disabled:cursor-not-allowed disabled:opacity-40 hover:bg-primary/10"
              >
                Next
              </button>
            </div>
          </ScrollAnimation>
        )}

        <AnimatePresence>
          {showEcosystem && (
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mt-16 mb-6">
                <ScrollAnimation variant="fade-up">
                  <h2 className="mb-4 font-bold text-h3 text-tertiary">
                    Ecosystem
                  </h2>
                  <p className="max-w-3xl font-normal leading-relaxed text-white/70 text-body">
                    Our ecosystem is a connected set of digital solutions
                    designed to support student growth and engagement. It
                    includes an AI automation system to streamline processes, a
                    mentorship platform to guide and develop members, and an
                    attendance app to track participation and enhance
                    commitment.
                  </p>
                </ScrollAnimation>
              </div>

              <Motion.div
                layout
                className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
              >
                <AnimatePresence mode="popLayout">
                  {filteredEcosystem.map((item, index) => (
                    <Motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ServiceCard
                        service={{
                          ...item,
                          title: item.name,
                        }}
                        delay={(index % 4) * 100}
                        basePath="/projects"
                      />
                    </Motion.div>
                  ))}
                </AnimatePresence>
              </Motion.div>

              {!isEcosystemLoading &&
                !isEcosystemError &&
                filteredEcosystem.length === 0 && (
                  <div className="py-10 text-center">
                    <p className="font-normal text-gray-500 text-body">
                      No ecosystem projects match your search
                    </p>
                  </div>
                )}

              {isEcosystemLoading && (
                <div className="py-10 text-center">
                  <p className="font-normal text-white/70 text-body">
                    Loading ecosystem projects...
                  </p>
                </div>
              )}

              {isEcosystemError && (
                <div className="py-10 text-center">
                  <p className="font-semibold text-red-200 text-body">
                    Could not load ecosystem projects
                  </p>
                </div>
              )}
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

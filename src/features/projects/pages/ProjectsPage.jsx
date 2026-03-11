import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ProjectsGrid from "../components/ProjectsGrid";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { listProjects } from "@/lib/api/endpoints";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";

const FILTER_TABS = ["All", "2026", "2025", "2024"];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const {
    data: projects = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => listProjects(),
  });
  if (isLoading) return <LoadingSpinner fullScreen={true} />;

  const filteredProjects =
    projects?.filter((project) => {
      const matchesSearch = project?.title
        ?.toLowerCase()
        .includes(search.toLowerCase());
      const matchesTab =
        activeFilter === "All" || project.year === activeFilter;
      return matchesSearch && matchesTab;
    }) || [];
  return (
    <section className="container min-h-screen px-4 py-10 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Page Title */}
        <ScrollAnimation variant="fade-down">
          <h1 className="mb-8 font-semibold text-h2 text-tertiary">
            Our Projects
          </h1>
        </ScrollAnimation>

        {/* Search Bar */}
        <ScrollAnimation variant="fade-up" delay={100}>
          <div className="relative mb-8">
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
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Projects.."
              className="w-full   pl-12 pr-4 py-3 rounded-lg border border-[#2a2050] focus:border-primary focus:outline-none placeholder-gray-500 text-body font-normal transition-colors"
            />
          </div>
        </ScrollAnimation>

        {/* Filter Tabs */}
        <ScrollAnimation variant="fade-up" delay={200}>
          <div className="flex gap-3 pb-2 mb-10 overflow-x-auto">
            {FILTER_TABS.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(tab)}
                className={`px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 whitespace-nowrap ${
                  activeFilter === tab
                    ? "bg-[#7A4BFF] text-white shadow-md"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <ProjectsGrid projects={filteredProjects} />
      </div>
    </section>
  );
}

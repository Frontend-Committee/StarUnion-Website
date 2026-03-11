import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useState } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import { useProjects } from "../hooks/useProjects";
import SearchBar from "@/components/common/SearchBar";
import FilterTabs from "@/components/common/FilterTabs";
import ContentGrid from "@/components/common/ContentGrid";

const FILTER_TABS = ["All", "2026", "2025", "2024"];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const { data: projects = [], isLoading } = useProjects;

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
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search Projects..."
          />
        </ScrollAnimation>

        {/* Filter Tabs */}
        <ScrollAnimation variant="fade-up" delay={200}>
          <FilterTabs
            tabs={FILTER_TABS}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
          />
        </ScrollAnimation>

        <ContentGrid
          items={filteredProjects}
          basePath="/projects"
          emptyMessage="No projects match your search criteria"
        />
      </div>
    </section>
  );
}

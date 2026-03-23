import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useState } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import SearchBar from "@/components/common/SearchBar";
import FilterTabs from "@/components/common/FilterTabs";
import ContentGrid from "@/components/common/ContentGrid";
import { useWorkshop } from "../hooks/useWorkshop";

const FILTER_TABS = ["All", "Upcoming", "Latest"];

export default function WorkshopPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const { data: workshops = [], isLoading } = useWorkshop();

  if (isLoading) return <LoadingSpinner fullScreen={true} />;

  const filteredWorkshops =
    workshops?.filter((workshop) => {
      const matchesSearch = workshop?.title
        ?.toLowerCase()
        .includes(search.toLowerCase());
      const matchesTab =
        activeFilter === "All" || workshop.year === activeFilter;
      return matchesSearch && matchesTab;
    }) || [];

  return (
    <section className="container min-h-screen px-4 py-10 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Page Title */}
        <ScrollAnimation variant="fade-down">
          <h1 className="mb-8 font-semibold text-h2 text-tertiary">
            Workshops
          </h1>
        </ScrollAnimation>

        {/* Search Bar */}
        <ScrollAnimation variant="fade-up" delay={100}>
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search workshops..."
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
          items={filteredWorkshops}
          basePath="/workshops"
          emptyMessage="No workshops match your search criteria"
        />
      </div>
    </section>
  );
}

import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useState } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import SearchBar from "@/components/common/SearchBar";
import FilterTabs from "@/components/common/FilterTabs";
import ContentGrid from "@/components/common/ContentGrid";
import { useEvents } from "../hooks/useEvents";

const FILTER_TABS = ["All", "Upcoming", "Latest"];

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const { data: events = [], isLoading } = useEvents();

  if (isLoading) return <LoadingSpinner fullScreen={true} />;

  const filteredEvents =
    events?.filter((event) => {
      const matchesSearch = event?.title
        ?.toLowerCase()
        .includes(search.toLowerCase());
      const matchesTab = activeFilter === "All" || event.year === activeFilter;
      return matchesSearch && matchesTab;
    }) || [];

  return (
    <section className="container min-h-screen px-4 py-10 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Page Title */}
        <ScrollAnimation variant="fade-down">
          <h1 className="mb-8 font-semibold text-h2 text-tertiary">Events</h1>
        </ScrollAnimation>

        {/* Search Bar */}
        <ScrollAnimation variant="fade-up" delay={100}>
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search Events..."
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
          items={filteredEvents}
          basePath="/events"
          emptyMessage="No events match your search criteria"
        />
      </div>
    </section>
  );
}

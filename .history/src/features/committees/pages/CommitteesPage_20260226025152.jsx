import { AnimatePresence, motion as Motion } from "framer-motion";
import { useMemo, useState } from "react";
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import {
  COMMITTEE_CATEGORIES,
  COMMITTEES_DATA,
} from "../../../utils/constants";
import CommitteeCard from "../components/CommitteeCard";

const FILTER_TABS = [
  { label: "All", value: COMMITTEE_CATEGORIES.ALL },
  { label: "Technical", value: COMMITTEE_CATEGORIES.TECHNICAL },
  { label: "Non - Technical", value: COMMITTEE_CATEGORIES.NON_TECHNICAL },
];

export default function CommitteesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(COMMITTEE_CATEGORIES.ALL);

  const filteredCommittees = useMemo(() => {
    return COMMITTEES_DATA.filter((c) => {
      const matchesSearch = c.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        activeFilter === COMMITTEE_CATEGORIES.ALL || c.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <section className="min-h-screen bg-gradientBg3 py-10 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Page Title */}
        <ScrollAnimation variant="fade-down">
          <h1 className="text-h2 text-tertiary font-extrabold mb-8">
            Star Committees
          </h1>
        </ScrollAnimation>

        {/* Search Bar */}
        <ScrollAnimation variant="fade-up" delay={100}>
          <div className="relative mb-5">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
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
              id="committee-search"
              type="text"
              placeholder="Search Committees.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg- text-white pl-12 pr-4 py-3 rounded-lg border border-[#2a2050] focus:border-primary focus:outline-none placeholder-gray-500 text-body font-normal transition-colors"
            />
          </div>
        </ScrollAnimation>

        {/* Filter Tabs */}
        <ScrollAnimation variant="fade-up" delay={200}>
          <div className="flex gap-3 mb-10">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                id={`filter-${tab.value}`}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-6 py-2 rounded-full text-[14px] font-bold transition-all duration-300 ${
                  activeFilter === tab.value
                    ? "bg-primary text-white border border-white"
                    : "border border-primary  text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Committees Grid */}
        <Motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCommittees.map((committee, index) => (
              <Motion.div
                key={committee.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CommitteeCard
                  committee={committee}
                  delay={(index % 4) * 150}
                />
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>

        {/* Empty state */}
        {filteredCommittees.length === 0 && (
          <ScrollAnimation variant="fade-up">
            <div className="text-center py-20">
              <p className="text-gray-400 text-h4">No committees found</p>
              <p className="text-gray-500 mt-2 text-body font-normal">
                Try adjusting your search or filter
              </p>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}

import { AnimatePresence, motion as Motion } from "framer-motion";
import { useMemo, useState } from "react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import {
  ECOSYSTEM_DATA,
  SERVICE_CATEGORIES,
  SERVICES_DATA,
} from "@/utils/constants";
import ServiceCard from "../components/ServiceCard";

const FILTER_TABS = [
  { label: "All", value: SERVICE_CATEGORIES.ALL },
  { label: "Technical", value: SERVICE_CATEGORIES.TECHNICAL },
  { label: "Non-Technical", value: SERVICE_CATEGORIES.NON_TECHNICAL },
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(SERVICE_CATEGORIES.ALL);

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((s) => {
      const matchesSearch = s.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        activeFilter === SERVICE_CATEGORIES.ALL || s.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  // Ecosystem doesn't need category filtering — only search
  const filteredEcosystem = useMemo(() => {
    if (!searchQuery) return ECOSYSTEM_DATA;
    return ECOSYSTEM_DATA.filter((e) =>
      e.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // hide ecosystem section when a category tab (not All) is active
  const showEcosystem = activeFilter === SERVICE_CATEGORIES.ALL;

  return (
    <section className="container min-h-screen px-4 py-10 md:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* ── Page Title ── */}
        <ScrollAnimation variant="fade-down">
          <h1 className="mb-8 font-semibold text-h2 text-tertiary">Services</h1>
        </ScrollAnimation>

        {/* ── Search Bar ── */}
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
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#2a2050] focus:border-primary focus:outline-none placeholder-gray-500 text-body font-normal transition-colors"
            />
          </div>
        </ScrollAnimation>

        {/* ── Filter Tabs ── */}
        <ScrollAnimation variant="fade-up" delay={200}>
          <div className="flex gap-3 mb-10">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                id={`service-filter-${tab.value}`}
                onClick={() => setActiveFilter(tab.value)}
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

        {/* ── Services Grid ── */}
        <Motion.div
          layout
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <Motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <ServiceCard
                  service={service}
                  delay={(index % 4) * 100}
                />
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>

        {/* Services empty state */}
        {filteredServices.length === 0 && (
          <ScrollAnimation variant="fade-up">
            <div className="py-16 text-center">
              <p className="text-gray-400 text-h4">No services found</p>
              <p className="mt-2 font-normal text-gray-500 text-body">
                Try adjusting your search or filter
              </p>
            </div>
          </ScrollAnimation>
        )}

        {/* ── Ecosystem Section ── */}
        <AnimatePresence>
          {showEcosystem && (
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
            >
              {/* Ecosystem heading + description */}
              <div className="mt-16 mb-6">
                <ScrollAnimation variant="fade-up">
                  <h2 className="text-h3 font-bold text-tertiary mb-4">
                    Ecosystem
                  </h2>
                  <p className="text-white/70 text-body font-normal leading-relaxed max-w-3xl">
                    Our ecosystem is a connected set of digital solutions designed
                    to support student growth and engagement. It includes an AI
                    automation system to streamline processes, a mentorship
                    platform to guide and develop members, and an attendance app
                    to track participation and enhance commitment.
                  </p>
                </ScrollAnimation>
              </div>

              {/* Ecosystem Grid */}
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
                        service={item}
                        delay={(index % 4) * 100}
                        basePath="/services/ecosystem"
                      />
                    </Motion.div>
                  ))}
                </AnimatePresence>
              </Motion.div>

              {filteredEcosystem.length === 0 && searchQuery && (
                <div className="py-10 text-center">
                  <p className="text-gray-500 text-body font-normal">
                    No ecosystem items match your search
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
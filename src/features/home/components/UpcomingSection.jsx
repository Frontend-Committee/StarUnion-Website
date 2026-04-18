import React from "react";
import MediaCard from "@/components/common/MediaCard";
import { servicesData } from "../data";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import HorizontalScrollSection from "@/components/common/HorizontalScrollSection";
import { Link } from "react-router-dom";
import { useEvents } from "@/features/events/hooks/useEvents";
import { useWorkshop } from "@/features/workshops/hooks/useWorkshop";
import { useProjects } from "@/features/projects/hooks/useProjects";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import { ArrowRight } from "lucide-react";

const SeeMoreLink = ({ to }) => (
  <Link
    to={to}
    className="group flex items-center gap-2 text-sm md:text-base font-medium text-white/70 hover:text-[#FFE738] transition-all duration-300"
  >
    <span className="relative">
      See More
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFE738] transition-all duration-300 group-hover:w-full" />
    </span>
    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 group-hover:border-[#FFE738]/50 group-hover:bg-[#FFE738]/10 transition-all duration-300">
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
    </div>
  </Link>
);

export default function UpcomingSection() {
  const { data: events = [], isLoading: isEventsLoading } = useEvents();
  const { data: workshops = [], isLoading: isWorkshopsLoading } = useWorkshop();
  const { data: projects = [], isLoading: isProjectsLoading } = useProjects();
  const isAnySectionLoading =
    isEventsLoading || isWorkshopsLoading || isProjectsLoading;

  if (isAnySectionLoading) return <LoadingSpinner fullScreen={true} />;

  return (
    <div className="flex flex-col w-full gap-6 ">
      {/* events */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-[#FFE738]">
              Upcoming Events
            </h2>
            <SeeMoreLink to="/events" />
          </div>
        </ScrollAnimation>

        <HorizontalScrollSection>
          {events.map((event, index) => (
            <ScrollAnimation
              mode="popLayout"
              key={event.id}
              delay={(index % 4) * 100}
            >
              <Link to={`/events/${event.id}`}>
                <MediaCard
                  title={event.name}
                  image={event.image}
                  buttonText={"Apply Now"}
                  date={event?.data?.date}
                />
              </Link>
            </ScrollAnimation>
          ))}
        </HorizontalScrollSection>
      </section>

      {/* workshops */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between ">
            <h2 className="text-xl md:text-2xl font-bold text-[#FFE738]">
              Upcoming Workshops
            </h2>
            <SeeMoreLink to="/workshops" />
          </div>
        </ScrollAnimation>

        <HorizontalScrollSection>
          {workshops.map((workshop, index) => (
            <ScrollAnimation
              mode="popLayout"
              key={workshop.id}
              delay={(index % 4) * 100}
            >
              <Link to={`/workshops/${workshop.id}`}>
                <MediaCard
                  title={workshop.name}
                  image={workshop.image}
                  buttonText={"Apply Now"}
                  date={workshop?.data?.date}
                />
              </Link>
            </ScrollAnimation>
          ))}
        </HorizontalScrollSection>
      </section>

      {/* services */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-[#FFE738]">
              Services We Offer
            </h2>
            <SeeMoreLink to="/services" />
          </div>
        </ScrollAnimation>

        <HorizontalScrollSection>
          {servicesData.map((service, index) => (
            <ScrollAnimation
              mode="popLayout"
              key={service.id}
              delay={(index % 4) * 100}
            >
              <Link to={`services/${service.id}`}>
                <MediaCard
                  title={service.name}
                  image={service.image}
                  buttonText={"Learn More"}
                />
              </Link>
            </ScrollAnimation>
          ))}
        </HorizontalScrollSection>
      </section>

      {/* stories */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-[#FFE738]">
              See Our Success Stories
            </h2>
            <SeeMoreLink to="/projects" />
          </div>
        </ScrollAnimation>

        <HorizontalScrollSection>
          {projects.map((story, index) => (
            <ScrollAnimation
              mode="popLayout"
              key={story.id}
              delay={(index % 4) * 100}
            >
              <Link to={`/projects/${story.id}`}>
                <MediaCard
                  title={story.name}
                  image={story.image}
                  buttonText={"Learn More"}
                />
              </Link>
            </ScrollAnimation>
          ))}
        </HorizontalScrollSection>
      </section>
    </div>
  );
}

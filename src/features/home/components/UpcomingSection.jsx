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

export default function UpcomingSection() {
  const { data: events = [], isLoading: isEventsLoading } = useEvents();
  const { data: workshops = [], isLoading: isWorkshopsLoading } = useWorkshop();
  const { data: projects = [], isLoading: isProjectsLoading } = useProjects();
  const isAnySectionLoading =
    isEventsLoading || isWorkshopsLoading || isProjectsLoading;
  if (isAnySectionLoading) return <LoadingSpinner fullScreen={true} />;

  return (
    <div className="flex flex-col w-full gap-6">
      {/* events */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-[#FFE738]">
              Upcoming Events
            </h2>
            <Link to={"/events"}>
              <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
                See More
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </p>
            </Link>
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
            <Link to={"/workshops"}>
              <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
                See More
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </p>
            </Link>
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
            <Link to={"/services"}>
              <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
                See More
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </p>
            </Link>
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
            <Link to={"/projects"}>
              <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
                See More
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </p>
            </Link>
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

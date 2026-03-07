import React from "react";
import MediaCard from "@/components/common/MediaCard";
import { eventsData, servicesData, storiesData, workshopsData } from "../data";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import HorizontalScrollSection from "@/components/common/HorizontalScrollSection";

export default function UpcomingSection() {
  return (
    <div className="flex flex-col w-full gap-12 my-10">
      {/* events */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#FFE738]">
              Upcoming Events
            </h2>

            <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
              See More
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </p>
          </div>
        </ScrollAnimation>

        <HorizontalScrollSection>
          {eventsData.map((event, index) => (
            <ScrollAnimation mode="popLayout" key={event.id} delay={(index % 4) * 100}>
              <MediaCard
                title={event.title}
                image={event.image}
                buttonText={event.buttonText}
                date={event.date}
              />
            </ScrollAnimation>
          ))}
        </HorizontalScrollSection>
      </section>

      {/* workshops */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#FFE738]">
              Upcoming Workshops
            </h2>
            <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
              See More
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </p>
          </div>
        </ScrollAnimation>

        <HorizontalScrollSection>
          {workshopsData.map((workshop, index) => (
            <ScrollAnimation mode="popLayout" key={workshop.id} delay={(index % 4) * 100}>
              <MediaCard
                title={workshop.title}
                image={workshop.image}
                buttonText={workshop.buttonText}
                date={workshop.date}
              />
            </ScrollAnimation>
          ))}
        </HorizontalScrollSection>
      </section>

      {/* services */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#FFE738]">
              Services We Offer
            </h2>
            <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
              See More
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </p>
          </div>
        </ScrollAnimation>

        <HorizontalScrollSection>
          {servicesData.map((service, index) => (
            <ScrollAnimation mode="popLayout" key={service.id} delay={(index % 4) * 100}>
              <MediaCard
                title={service.title}
                image={service.image}
                buttonText={service.buttonText}
              />
            </ScrollAnimation>
          ))}
        </HorizontalScrollSection>
      </section>

      {/* stories */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#FFE738]">
              See Our Success Stories
            </h2>
            <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
              See More
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </p>
          </div>
        </ScrollAnimation>

        <HorizontalScrollSection>
          {storiesData.map((story, index) => (
            <ScrollAnimation mode="popLayout" key={story.id} delay={(index % 4) * 100}>
              <MediaCard
                title={story.title}
                image={story.image}
                buttonText={story.buttonText}
              />
            </ScrollAnimation>
          ))}
        </HorizontalScrollSection>
      </section>
    </div>
  );
}

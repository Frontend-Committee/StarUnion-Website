import React from "react";
import MediaCard from "@/components/common/MediaCard";
import { eventsData, servicesData, storiesData, workshopsData } from "../data";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function UpcomingSection() {
  return (
    <div className="flex flex-col w-full gap-5 px-4 py-10 md:px-20">
      {/* events */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
              Upcoming Events
            </h2>

            <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
              See More
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex gap-4 pb-6 overflow-x-auto snap-x">
          {eventsData.map((event, index) => (
            <ScrollAnimation mode="popLayout" delay={(index % 4) * 150}>
              <MediaCard
                key={event.id}
                title={event.title}
                image={event.image}
                buttonText={event.buttonText}
                date={event.date}
              />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* workshops */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
              Upcoming Workshops
            </h2>
            <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
              See More
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex gap-4 pb-6 overflow-x-auto snap-x">
          {workshopsData.map((workshop, index) => (
            <ScrollAnimation mode="popLayout" delay={(index % 4) * 150}>
              <MediaCard
                key={workshop.id}
                title={workshop.title}
                image={workshop.image}
                buttonText={workshop.buttonText}
                date={workshop.date}
              />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* services */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
              Services We Offer
            </h2>
            <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
              See More
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex gap-4 pb-6 overflow-x-auto snap-x">
          {servicesData.map((service, index) => (
            <ScrollAnimation mode="popLayout" delay={(index % 4) * 150}>
              <MediaCard
                key={service.id}
                title={service.title}
                image={service.image}
                buttonText={service.buttonText}
              />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* stories */}
      <section>
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
              See Our Success Stories
            </h2>
            <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
              See More
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex gap-4 pb-6 overflow-x-auto snap-x">
          {storiesData.map((story, index) => (
            <ScrollAnimation mode="popLayout" delay={(index % 4) * 150}>
              <MediaCard
                key={story.id}
                title={story.title}
                image={story.image}
                buttonText={story.buttonText}
              />
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </div>
  );
}

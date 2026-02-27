import React from "react";
import MediaCard from "@/components/common/MediaCard";
import { eventsData, servicesData, storiesData, workshopsData } from "../data";

export default function UpcomingSection() {
  return (
    <div className="flex flex-col w-full gap-5 px-4 py-10 md:px-20">
      {/* events */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
            Upcoming Events
          </h2>
          <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
            See More
          </p>
        </div>

        <div className="flex gap-4 pb-6 overflow-x-auto snap-x">
          {eventsData.map((event) => (
            <MediaCard
              key={event.id}
              title={event.title}
              image={event.image}
              buttonText={event.buttonText}
              date={event.date}
            />
          ))}
        </div>
      </section>

      {/* workshops */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
            Upcoming Workshops
          </h2>
          <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
            See More
          </p>
        </div>

        <div className="flex gap-4 pb-6 overflow-x-auto snap-x">
          {workshopsData.map((workshop) => (
            <MediaCard
              key={workshop.id}
              title={workshop.title}
              image={workshop.image}
              buttonText={workshop.buttonText}
              date={workshop.date}
            />
          ))}
        </div>
      </section>

      {/* services */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
            Services We Offer
          </h2>
          <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
            See More
          </p>
        </div>

        <div className="flex gap-4 pb-6 overflow-x-auto snap-x">
          {servicesData.map((service) => (
            <MediaCard
              key={service.id}
              title={service.title}
              image={service.image}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </section>

      {/* stories */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
            See Our Success Stories
          </h2>
          <p className="text-white transition-colors cursor-pointer hover:underline hover:text-blue-400">
            See More
          </p>
        </div>

        <div className="flex gap-4 pb-6 overflow-x-auto snap-x">
          {storiesData.map((story) => (
            <MediaCard
              key={story.id}
              title={story.title}
              image={story.image}
              buttonText={story.buttonText}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

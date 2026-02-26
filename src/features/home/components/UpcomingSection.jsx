import React from "react";
import MediaCard from "@/components/common/MediaCard";
import { eventsData, servicesData, storiesData, workshopsData } from "../data";

export default function UpcomingSection() {
  return (
    <div className="w-full px-4 md:px-20 py-10 flex flex-col gap-5">
      {/* events */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
            Upcoming Events
          </h2>
          <p className="hover:underline hover:text-blue-400 cursor-pointer text-black transition-colors">
            See More
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6 snap-x">
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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
            Upcoming Workshops
          </h2>
          <p className="hover:underline hover:text-blue-400 cursor-pointer text-black transition-colors">
            See More
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6 snap-x">
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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
            Services We Offer
          </h2>
          <p className="hover:underline hover:text-blue-400 cursor-pointer text-black transition-colors">
            See More
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6 snap-x">
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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EFD830]">
            See Our Success Stories
          </h2>
          <p className="hover:underline hover:text-blue-400 cursor-pointer text-blacktransition-colors">
            See More
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6 snap-x">
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

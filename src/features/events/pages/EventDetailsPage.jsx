import { useNavigate, useParams } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import Sponsors from "@/features/home/components/Sponsers";
import { Button } from "@/components/ui/button";
import { useEventDetails } from "../hooks/useEventDetails";
import HorizontalScrollSection from "@/components/common/HorizontalScrollSection";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";


export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: event, isLoading } = useEventDetails(id);
  console.log(event)
  if (isLoading) return <LoadingSpinner fullScreen={true} />;

  return (
    <div className="container min-h-screen px-4 py-10 mx-auto text-white md:px-8">
      <ScrollAnimation variant="fade-right">
        <button
          onClick={() => navigate("/events")}
          className="flex items-center gap-2 mb-12 text-white transition-colors cursor-pointer hover:text-tertiary group"
          id="back-to-committees"
        >
          <div className="p-2 rounded-full border border-white/20 group-hover:bg-white/10 transition-colors">
            <svg
              className="w-6 h-6 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="font-semibold uppercase tracking-widest text-xs">
            Back to Events
          </span>
        </button>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up">
        <h1 className="mb-6 font-bold text-h2 text-tertiary">Event Overview</h1>

        <div className="bg-[#7441FE] px-6 py-8 rounded-2xl leading-loose shadow-lg">
          <h2 className="mb-3 font-bold text-h4 text-tertiary">{event.name}</h2>
          <p className="mb-4 text-white/90">{event.data.description}</p>
        </div>
      </ScrollAnimation>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 w-full max-w-4xl py-6 border-b border-white/10 mb-8 mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
            <Calendar className="w-6 h-6" />
          </div>
          <span className="text-white font-medium text-base md:text-lg">
            {event.data.date}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="text-white font-medium text-base md:text-lg">
            {event.data.location}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
            <Clock className="w-6 h-6" />
          </div>
          <span className="text-white font-medium text-base md:text-lg">
            {event.data.time}
          </span>
        </div>
      </div>

      <ScrollAnimation variant="fade-up" delay={100}>
        <h1 className="text-h2 text-tertiary mt-6">Featured Speakers</h1>
        <div className="my-10">
          <HorizontalScrollSection>
            {event.speakers.map((member) => (
              <div
                key={member.id}
                className="shrink-0 w-[200px] md:w-[200px] overflow-hidden shadow-md rounded-xl bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="object-cover w-full h-[220px]"
                />
                <div className="p-4 bg-white">
                  <p className="font-bold text-lg text-[#452798]">
                    {member.name}
                  </p>
                  <p className="text-sm font-medium text-black">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </HorizontalScrollSection>
        </div>
      </ScrollAnimation>
      <Sponsors />
      <div className="text-center my-5">
        <Button className="p-5" onClick={() => navigate("/")}>
          Register Now <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

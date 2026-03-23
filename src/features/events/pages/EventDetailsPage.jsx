import { useNavigate, useParams } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import picture from "@/assets/images/ProfilePage/portfolioImg.jpg";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import Sponsors from "@/features/home/components/Sponsers";
import { Button } from "@/components/ui/button";

const teamMembers = [
  { id: 1, name: "Lina Sophia", role: "UX Researcher", img: picture },
  { id: 2, name: "Lina Sophia", role: "UX Researcher", img: picture },
  { id: 3, name: "Lina Sophia", role: "UX Researcher", img: picture },
  { id: 4, name: "Lina Sophia", role: "UX Researcher", img: picture },
];

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
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
          <h2 className="mb-3 font-bold text-h4 text-tertiary">
            AI and Future
          </h2>
          <p className="mb-4 text-white/90">
            Welcome to the Global Innovation Summit 2026. This year, we bring
            together the brightest minds, industry leaders, and tech visionaries
            to explore the boundaries of what’s possible.
          </p>
        </div>
      </ScrollAnimation>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 w-full max-w-4xl py-6 border-b border-white/10 mb-8 mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
            <Calendar className="w-6 h-6" />
          </div>
          <span className="text-white font-medium text-base md:text-lg">
            Oct 24-26, 2026
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="text-white font-medium text-base md:text-lg">
            FCAI - CU, Cairo
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
            <Clock className="w-6 h-6" />
          </div>
          <span className="text-white font-medium text-base md:text-lg">
            09:00 AM - 06:00 PM
          </span>
        </div>
      </div>

      <ScrollAnimation variant="fade-up" delay={100}>
        <h1 className="text-h2 text-tertiary mt-6">Featured Speakers</h1>
        <div className="grid grid-cols-1 gap-6 mb-10 mt-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden shadow-md rounded-xl bg-white/5"
            >
              <img
                src={member.img}
                alt={member.name}
                className="object-cover w-full h-[220px]"
              />
              <div className="p-4 bg-white">
                <p className="font-bold text-lg text-[#452798]">
                  {member.name}
                </p>
                <p className="text-sm font-medium text-black">{member.role}</p>
              </div>
            </div>
          ))}
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

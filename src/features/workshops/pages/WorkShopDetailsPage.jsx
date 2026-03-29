import { useNavigate, useParams } from "react-router-dom";
import {
  FileText,
  Check,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { useWorkshopDetails } from "../hooks/useWorkshopDetails";
import HorizontalScrollSection from "@/components/common/HorizontalScrollSection";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";

export default function WorkShopDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: workshop, isLoading } = useWorkshopDetails(id);
  if (isLoading) return <LoadingSpinner fullScreen={true} />;
  return (
    <div className="container min-h-screen px-4 py-10 mx-auto text-white md:px-8">
      <ScrollAnimation variant="fade-right">
        <button
          onClick={() => navigate("/workshops")}
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
            Back to Workshops
          </span>
        </button>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up">
        <h1 className="mb-6 font-bold text-h2 text-tertiary">
          Workshop Overview
        </h1>

        <div className="bg-[#7441FE] px-6 py-8 rounded-2xl leading-loose shadow-lg">
          <h2 className="mb-3 font-bold text-h4 text-tertiary">
            {workshop.name}
          </h2>
          <p className="mb-4 text-white/90">
            Our workshops are designed to bridge the gap between theoretical
            knowledge and practical application, ensuring you gain actionable
            insights that can be immediately applied in your professional
            environment.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 w-full max-w-4xl py-6 border-b border-white/10 mb-8 mt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
              <Calendar className="w-6 h-6" />
            </div>
            <span className="text-white font-medium text-base md:text-lg">
              {workshop.data.date}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-white font-medium text-base md:text-lg">
              {workshop.data.location}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-white font-medium text-base md:text-lg">
              {workshop.data.time}
            </span>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={100}>
        <h1 className="text-h2 text-tertiary mt-6">Featured Instructors</h1>
        <div className="my-10">
          <HorizontalScrollSection>
            {workshop.instructors.map((member) => (
              <div
                key={member.id}
                className="shrink-0 w-[200px] md:w-[200px] overflow-hidden shadow-md rounded-xl bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={member.user.profile_photo}
                  alt={member.user.full_name}
                  className="object-cover w-full h-[220px]"
                />
                <div className="p-4 bg-white">
                  <p className="font-bold text-lg text-[#452798]">
                    {member.user.full_name}
                  </p>
                  <p className="text-sm font-medium text-black">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </HorizontalScrollSection>
        </div>
      </ScrollAnimation>
      <ScrollAnimation variant="fade-up" delay={100}>
        <h1 className="text-h2 text-tertiary mt-6">Top Members</h1>
        <div className="grid grid-cols-1 gap-6 mb-10 mt-6 sm:grid-cols-2 lg:grid-cols-4">
          {workshop.top_members.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden shadow-md rounded-xl bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.user.full_name}
                className="object-cover w-full h-[220px]"
              />
              <div className="p-4 bg-white">
                <p className="font-bold text-lg text-[#452798]">
                  {member.user.full_name}
                </p>
                <p className="text-sm font-medium text-black">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
      <ScrollAnimation variant="fade-up" delay={100}>
        <div className="flex flex-col gap-12 w-full max-w-5xl my-16 text-white">
          <div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFE738] mb-1">
                What You'll Build
              </h2>
              <div className="w-48 h-1 bg-[#FFE738]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 text-lg">
              <ol className="list-decimal list-inside space-y-2">
                {workshop.data.what_we_will_build.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFE738] mb-1">
                Learning Material
              </h2>
              <div className="w-60 h-1 bg-[#FFE738]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white">
                  <FileText className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-[#FFE738] text-xl font-bold mb-2">
                    Digital Resources
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Comprehensive documentation and guides to support your
                    learning journey.
                  </p>
                  <ul className="space-y-1">
                    {workshop.data.learning_materials.map((item) => (
                      <li className="flex items-center gap-2 text-sm text-gray-200">
                        <Check className="w-4 h-4 text-white" /> 50+ Page
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="text-center my-5">
        <Button className="p-5" onClick={() => navigate("/")}>
          Register Now <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

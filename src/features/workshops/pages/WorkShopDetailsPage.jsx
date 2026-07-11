import HorizontalScrollSection from "@/components/common/HorizontalScrollSection";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useWorkshopDetails } from "../hooks/useWorkshopDetails";

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
          <div className="p-2 transition-colors border rounded-full border-white/20 group-hover:bg-white/10">
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
          <span className="text-xs font-semibold tracking-widest uppercase">
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
          <p className="mb-4 text-white/90 whitespace-pre-line">
            {workshop.overview?.trim() ||
              "Our workshops are designed to bridge the gap between theoretical knowledge and practical application, ensuring you gain actionable insights that can be immediately applied in your professional environment."}
          </p>
        </div>
        {(workshop.data.date || workshop.data.location || workshop.data.time) && (
          <div className="flex flex-col items-start justify-between w-full max-w-4xl gap-6 py-6 mt-4 mb-8 border-b md:flex-row md:items-center md:gap-10 border-white/10">
            {workshop.data.date && (
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="text-base font-medium text-white md:text-lg">
                  {workshop.data.date}
                </span>
              </div>
            )}
            {workshop.data.location && (
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-base font-medium text-white md:text-lg">
                  {workshop.data.location}
                </span>
              </div>
            )}
            {workshop.data.time && (
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#7A4BFF] text-white shadow-sm transition-transform hover:scale-105">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-base font-medium text-white md:text-lg">
                  {workshop.data.time}
                </span>
              </div>
            )}
          </div>
        )}
      </ScrollAnimation>

      {workshop.instructors?.length > 0 && (
        <ScrollAnimation variant="fade-up" delay={100}>
          <h1 className="mt-6 text-h2 text-tertiary">Featured Instructors</h1>
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
      )}
      {workshop.top_members?.length > 0 && (
        <ScrollAnimation variant="fade-up" delay={100}>
          <h1 className="mt-6 text-h2 text-tertiary">Top Members</h1>
          <div className="grid grid-cols-1 gap-6 mt-6 mb-10 sm:grid-cols-2 lg:grid-cols-4">
            {workshop.top_members.map((member) => (
              <div
                key={member.id}
                className="overflow-hidden transition-all duration-300 shadow-md rounded-xl bg-white/5 hover:-translate-y-2 hover:shadow-xl"
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
      )}
      <ScrollAnimation variant="fade-up" delay={100}>
        <div className="flex flex-col w-full max-w-5xl gap-12 my-16 text-white">
          <div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFE738] mb-1">
                What You'll Build
              </h2>
              <div className="w-48 h-1 bg-[#FFE738]"></div>
            </div>

            {workshop.data.what_we_will_build.length >= 8 ? (
              <ul className="space-y-2 text-lg md:columns-2 md:gap-20">
                {workshop.data.what_we_will_build.map((item, index) => (
                  <li key={`build-${index}`} className="flex items-start gap-3 break-inside-avoid">
                    <span className="mt-2.5 w-2.5 h-2.5 shrink-0 rounded-full bg-current" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2 text-lg">
                {workshop.data.what_we_will_build.map((item, index) => (
                  <li key={`build-${index}`} className="flex items-start gap-3">
                    <span className="mt-2.5 w-2.5 h-2.5 shrink-0 rounded-full bg-current" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFE738] mb-1">
                Learning Material
              </h2>
              <div className="w-60 h-1 bg-[#FFE738]"></div>
            </div>

            {workshop.data.learning_materials.length >= 8 ? (
              <ul className="space-y-2 text-lg md:columns-2 md:gap-12">
                {workshop.data.learning_materials.map((item, index) => (
                  <li key={`material-${index}`} className="flex items-start gap-3 break-inside-avoid">
                    <span className="mt-2.5 w-2.5 h-2.5 shrink-0 rounded-full bg-current" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2 text-lg">
                {workshop.data.learning_materials.map((item, index) => (
                  <li key={`material-${index}`} className="flex items-start gap-3">
                    <span className="mt-2.5 w-2.5 h-2.5 shrink-0 rounded-full bg-current" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </ScrollAnimation>

      <div className="my-5 text-center">
        {workshop.registration_form != null && (
          <div className="my-5 text-center">
            <Button
              className="p-5"
              onClick={() =>
                navigate(`/registration/${workshop.registration_form}`)
              }
            >
              Register Now <ArrowRight />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

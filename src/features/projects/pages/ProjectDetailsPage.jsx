import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useProjectDetails } from "../hooks/useProjectDetails";
import HorizontalScrollSection from "@/components/common/HorizontalScrollSection";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: project, isLoading } = useProjectDetails(id);
  if (isLoading) return <LoadingSpinner fullScreen={true} />;

  return (
    <div className="container min-h-screen px-4 py-10 mx-auto text-white md:px-8">
      <ScrollAnimation variant="fade-right">
        <button
          onClick={() => navigate("/Projects")}
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
            Back to Projects
          </span>
        </button>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up">
        <h1 className="mb-6 font-bold text-h2 text-tertiary">
          Project Overview
        </h1>

        <div className="bg-[#7A4BFF] px-6 py-8 rounded-2xl leading-loose shadow-lg">
          <h2 className="mb-3 font-bold text-h4 text-tertiary">
            {project.name}
          </h2>
          <p className="mb-4 text-white/90">{project.description}</p>
          <div className="flex flex-col gap-2 font-medium text-white/90">
            <p>Team Size : {project.team_members.length} Members</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={100}>
        <h1 className="text-h2 text-tertiary mt-6">Team Members</h1>
        <div className="my-10">
          <HorizontalScrollSection>
            {project.team_members.map((member) => (
              <div
                key={member.id}
                className="shrink-0 w-[200px] md:w-[200px] overflow-hidden shadow-md rounded-xl bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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
                  <p className="text-sm font-medium text-black">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </HorizontalScrollSection>
        </div>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={200}>
        <div className="grid grid-cols-1 gap-12 my-16 md:grid-cols-2">
          <div>
            <h3 className="mb-6 font-bold text-h4 text-tertiary border-b-2 border-tertiary inline-block pb-1">
              The Challenge
            </h3>
            <div className="flex flex-col gap-4">
              {project.data.challenges.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <p className="text-lg text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-h4 text-tertiary border-b-2 border-tertiary inline-block pb-1">
              Our Approach
            </h3>
            <div className="flex flex-col gap-4">
              {project.data.approach.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <p className="text-lg text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={300}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-h3 text-tertiary">Project Gallery</h3>
          <Link
            to="#"
            className="flex items-center gap-2 text-white transition-colors hover:text-tertiary"
          >
            See live project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mb-10">
          <HorizontalScrollSection>
            {project.gallery.map((img) => (
              <div
                key={img.id}
                className="shrink-0 w-[300px] md:w-[350px] overflow-hidden rounded-xl h-[300px] border border-white/10"
              >
                <img
                  src={img.image}
                  alt={img.caption}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </HorizontalScrollSection>
        </div>
      </ScrollAnimation>
    </div>
  );
}

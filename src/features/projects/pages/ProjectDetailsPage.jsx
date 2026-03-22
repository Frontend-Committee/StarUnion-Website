import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  TrendingDown,
  Clock,
  BarChart2,
  Search,
  PenTool,
  Rocket,
  ArrowRight,
} from "lucide-react";
import picture from "@/assets/images/ProfilePage/portfolioImg.jpg";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const teamMembers = [
  { id: 1, name: "Lina Sophia", role: "UX Researcher", img: picture },
  { id: 2, name: "Lina Sophia", role: "UX Researcher", img: picture },
  { id: 3, name: "Lina Sophia", role: "UX Researcher", img: picture },
  { id: 4, name: "Lina Sophia", role: "UX Researcher", img: picture },
];

const challenges = [
  {
    id: 1,
    text: "Low Retention Rate",
    icon: <TrendingDown className="w-5 h-5" />,
  },
  { id: 2, text: "Inefficient processes", icon: <Clock className="w-5 h-5" /> },
  { id: 3, text: "Digital Growth", icon: <BarChart2 className="w-5 h-5" /> },
];

const approaches = [
  { id: 1, text: "Discovery & Strategy", icon: <Search className="w-5 h-5" /> },
  {
    id: 2,
    text: "Design & Development",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    id: 3,
    text: "Launch & Optimization",
    icon: <Rocket className="w-5 h-5" />,
  },
];

const gallery = [picture, picture, picture, picture]; // ضيف صور الجلري هنا

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

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
            Attendance App
          </h2>
          <p className="mb-4 text-white/90">
            This project aims to enhance the members and heads experience in
            registration for offline sessions.
          </p>
          <div className="flex flex-col gap-2 font-medium text-white/90">
            <p>Team Size : 4 Members</p>
            <p>Duration : 2 Weeks</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={100}>
        <div className="grid grid-cols-1 gap-6 my-10 sm:grid-cols-2 lg:grid-cols-4">
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

      <ScrollAnimation variant="fade-up" delay={200}>
        <div className="grid grid-cols-1 gap-12 my-16 md:grid-cols-2">
          <div>
            <h3 className="mb-6 font-bold text-h4 text-tertiary border-b-2 border-tertiary inline-block pb-1">
              The Challenge
            </h3>
            <div className="flex flex-col gap-4">
              {challenges.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="flex items-center justify-center p-3 rounded-lg bg-primary text-white">
                    {item.icon}
                  </div>
                  <p className="text-lg text-white">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-h4 text-tertiary border-b-2 border-tertiary inline-block pb-1">
              Our Approach
            </h3>
            <div className="flex flex-col gap-4">
              {approaches.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="flex items-center justify-center p-3 rounded-lg bg-primary text-white">
                    {item.icon}
                  </div>
                  <p className="text-lg text-white">{item.text}</p>
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-5">
          {gallery.map((imgSrc, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl h-[300px] border border-white/10"
            >
              <img
                src={imgSrc}
                alt={`Gallery ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}

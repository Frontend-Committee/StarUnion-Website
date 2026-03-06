import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import React from "react";

export default function ProjectCard({ project, delay }) {
  return (
    <ScrollAnimation mode="popLayout" delay={delay}>
      <div className="relative shrink-0 snap-start w-full h-[300px] rounded-2xl overflow-hidden group cursor-pointer border-2 border-transparent hover:border-[#3b82f6] transition-all duration-300 shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1b0a42]/90 via-[#1b0a42]/20 to-black/40"></div>

        <div className="relative z-10 h-full flex flex-col justify-between items-center p-4">
          <div className="text-center">
            <h3 className="font-bold text-white text-base drop-shadow-md mt-1 max-w-[130px] leading-tight">
              {project.title}
            </h3>
          </div>
          <Button className="bg-white text-[#7A4BFF] hover:bg-gray-100 font-bold rounded-xl py-5 transition-transform group-hover:scale-[1.02]">
            View Details
          </Button>
        </div>
      </div>
    </ScrollAnimation>
  );
}

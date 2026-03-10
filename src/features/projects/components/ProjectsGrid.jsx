import React from "react";
import ProjectCard from "./ProjectCard";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { AnimatePresence, motion as Motion } from "framer-motion";

export default function ProjectsGrid({ projects }) {
  return (
    <>
      <Motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 max-md:px-10"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <Motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                key={project.id}
                project={project}
                delay={(index % 4) * 150}
              />
            </Motion.div>
          ))}
        </AnimatePresence>
      </Motion.div>

      {/* Empty state */}
      {projects.length === 0 && (
        <ScrollAnimation variant="fade-up">
          <div className="py-20 text-center">
            <p className="text-gray-400 text-h4">No Projects found</p>
            <p className="mt-2 font-normal text-gray-500 text-body">
              Try adjusting your search or filter
            </p>
          </div>
        </ScrollAnimation>
      )}
    </>
  );
}

import React from "react";
import yearsEx from "../../../assets/images/Homepage/aboutSection/experience years.png";
import calendar from "../../../assets/images/Homepage/aboutSection/calendar.png";
import people from "../../../assets/images/Homepage/aboutSection/people.png";
import institutions from "../../../assets/images/Homepage/aboutSection/Institutions.png";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const statsData = [
  { id: 1, icon: yearsEx, number: "2+", text: "Years Experience" },
  { id: 2, icon: calendar, number: "15+", text: "Events Organized" },
  { id: 3, icon: people, number: "100+", text: "Students Engaged" },
  { id: 4, icon: institutions, number: "5+", text: "Partner Institutions" },
];

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center w-full gap-8 mb-16 py-10 md:py-20">
      <ScrollAnimation>
        <div className="flex flex-col items-center w-full p-8 text-center shadow-lg rounded-2xl md:p-12 bg-primary">
          <h2 className="text-[#FFE738] font-bold text-3xl mb-6">About Us</h2>
          <p className="w-full text-base leading-relaxed text-white md:w-2/3 md:text-xl">
            S.T.A.R Union is a student activity founded on September 9, 2023,
            with a specific focus on helping students in the field of
            technology, particularly computer science. Its primary goals include
            spreading awareness and encouragement regarding micro-business
            development and the concept of startups among students and will
            achieve these goals through various activities, such as workshops
            and events.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {statsData.map((stat, index) => (
          <ScrollAnimation mode="popLayout" delay={(index % 4) * 150}>
            <div
              key={stat.id}
              className="flex flex-row items-center justify-center gap-4 px-6 py-5 text-white transition-transform rounded-lg shadow-md bg-primary hover:scale-105"
            >
              <div className="logo shrink-0">
                <img
                  src={stat.icon}
                  alt={stat.text}
                  className="object-contain w-8"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold text-xl md:text-2xl text-[#FFE738] leading-none">
                  {stat.number}
                </h2>
                <p className="text-sm md:text-base whitespace-nowrap">
                  {stat.text}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}

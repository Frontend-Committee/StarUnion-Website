import React from "react";
import yearsEx from "../../../assets/images/Homepage/aboutSection/experience years.png";
import calendar from "../../../assets/images/Homepage/aboutSection/calendar.png";
import people from "../../../assets/images/Homepage/aboutSection/people.png";
import institutions from "../../../assets/images/Homepage/aboutSection/Institutions.png";

const statsData = [
  { id: 1, icon: yearsEx, number: "2+", text: "Years Experience" },
  { id: 2, icon: calendar, number: "15+", text: "Events Organized" },
  { id: 3, icon: people, number: "100+", text: "Students Engaged" },
  { id: 4, icon: institutions, number: "5+", text: "Partner Institutions" },
];

export default function AboutSection() {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-20 my-10 gap-8">
      <div className="flex flex-col items-center text-center bg-[#7A4BFF] rounded-2xl p-8 md:p-12 shadow-lg w-full">
        <h2 className="text-[#EFD830] font-bold text-3xl mb-6">About Us</h2>
        <p className="w-full md:w-2/3 text-white text-base md:text-xl leading-relaxed">
          S.T.A.R Union is a student activity founded on September 9, 2023, with
          a specific focus on helping students in the field of technology,
          particularly computer science. Its primary goals include spreading
          awareness and encouragement regarding micro-business development and
          the concept of startups among students and will achieve these goals
          through various activities, such as workshops and events.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-row justify-center items-center gap-4 bg-[#7A4BFF] text-white px-6 py-5 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <div className="logo shrink-0">
              <img
                src={stat.icon}
                alt={stat.text}
                className="object-contain w-8 md:w-10"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h2 className="font-bold text-2xl md:text-3xl text-[#EFD830] leading-none">
                {stat.number}
              </h2>
              <p className="text-sm md:text-base whitespace-nowrap">
                {stat.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

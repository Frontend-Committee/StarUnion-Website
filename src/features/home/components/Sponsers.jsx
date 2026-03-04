import React from "react";
import cortex from "@/assets/images/Homepage/Sponsers/cortex.png";
import sia from "@/assets/images/Homepage/Sponsers/sia space.png";
import dotpy from "@/assets/images/Homepage/Sponsers/dotpy.png";
import youth from "@/assets/images/Homepage/Sponsers/youth scope.png";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const sponsorsData = [
  { id: 1, title: "Cortex", img: cortex },
  { id: 2, title: "SIA Space", img: sia },
  { id: 3, title: "Dotpy", img: dotpy },
  { id: 4, title: "Youth Scope", img: youth },
];

export default function Sponsors() {
  return (
    <div className="flex flex-col justify-center items-center w-full mb-10">
      <ScrollAnimation>
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFE738] mb-8 md:mb-12 text-center">
          Our Sponsors & Partners
        </h2>
      </ScrollAnimation>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
        {sponsorsData.map((s, index) => (
          <ScrollAnimation mode="popLayout" delay={(index % 4) * 150}>
            <div
              key={s.id}
              className="bg-[#7441FF] flex justify-center items-center w-full h-full rounded-xl p-4 shadow-sm hover:scale-105 transition-transform duration-300"
            >
              <img
                src={s.img}
                alt={s.title}
                className="object-contain"
              />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
